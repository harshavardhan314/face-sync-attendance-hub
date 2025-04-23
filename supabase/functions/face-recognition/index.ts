
// deno-lint-ignore-file no-explicit-any
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (req.method !== 'POST') {
      throw new Error('Method not allowed');
    }

    const requestData = await req.json();

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    if (requestData.action === 'register') {
      const { faceEncoding, name, rollNo } = requestData;
      if (!faceEncoding || !name || !rollNo) {
        throw new Error('Missing required fields for registration');
      }

      // Insert the user into the new users table
      const { data: user, error: insertError } = await supabaseClient
        .from('users')
        .insert({
          name,
          roll_no: rollNo, // matches the new table
          face_encoding: JSON.stringify(faceEncoding),
        })
        .select('*')
        .single();

      if (insertError) {
        // If unique violation, inform user cleanly
        if ((insertError as any).code === '23505') {
          return new Response(
            JSON.stringify({
              success: false,
              message: 'User already exists with this roll number.'
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 409 }
          );
        }
        throw insertError;
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: 'User registered successfully',
          user,
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    else if (requestData.action === 'recognize') {
      const { faceEncoding } = requestData;
      if (!faceEncoding) {
        throw new Error('Missing face encoding for recognition');
      }

      const { data: users, error: usersError } = await supabaseClient
        .from('users')
        .select('id, name, roll_no, face_encoding')
        .not('face_encoding', 'is', null);

      if (usersError) {
        throw usersError;
      }

      let matchedUser = null;
      for (const user of users) {
        try {
          const storedEncoding = JSON.parse(user.face_encoding);
          const distance = calculateEuclideanDistance(faceEncoding, storedEncoding);
          const THRESHOLD = 0.6;
          if (distance < THRESHOLD) {
            matchedUser = user;
            break;
          }
        } catch (e) {
          console.error(`Error parsing face encoding for user ${user.id}:`, e);
        }
      }

      if (matchedUser) {
        // Insert attendance record into new table
        const { data: attendance, error: attendanceError } = await supabaseClient
          .from('attendance')
          .insert({
            user_id: matchedUser.id,
            status: 'present', // for demo, always present when recognized
            // timestamp auto-set by DB default
          })
          .select('*')
          .single();

        if (attendanceError) {
          throw attendanceError;
        }

        return new Response(
          JSON.stringify({
            success: true,
            user: matchedUser,
            attendance,
            message: `Attendance marked for ${matchedUser.name}`
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({
          success: false,
          message: 'No match found'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    else {
      throw new Error('Invalid action specified');
    }
  } catch (error) {
    console.error('Error in face-recognition function:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});

// Helper function to calculate Euclidean distance between two face encodings
function calculateEuclideanDistance(encoding1: number[], encoding2: number[]) {
  if (!Array.isArray(encoding1) || !Array.isArray(encoding2) || encoding1.length !== encoding2.length) {
    throw new Error('Invalid encodings provided for comparison');
  }
  let sum = 0;
  for (let i = 0; i < encoding1.length; i++) {
    sum += Math.pow(encoding1[i] - encoding2[i], 2);
  }
  return Math.sqrt(sum);
}
