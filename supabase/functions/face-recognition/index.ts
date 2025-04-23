
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (req.method !== 'POST') {
      throw new Error('Method not allowed');
    }

    const { faceEncoding } = await req.json();

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get all users with their face encodings
    const { data: users, error: usersError } = await supabaseClient
      .from('users')
      .select('*')
      .not('face_encoding', 'is', null);

    if (usersError) {
      throw usersError;
    }

    // Compare the new encoding with stored encodings
    // Note: In a production environment, you'd want to use a proper face recognition library
    // This is a simplified example that just compares if encodings are exactly the same
    const matchedUser = users.find(user => {
      const storedEncoding = JSON.parse(user.face_encoding);
      return JSON.stringify(storedEncoding) === JSON.stringify(faceEncoding);
    });

    if (matchedUser) {
      // Log attendance
      const { error: attendanceError } = await supabaseClient
        .from('attendance')
        .insert({
          user_id: matchedUser.id,
          status: 'present'
        });

      if (attendanceError) {
        throw attendanceError;
      }

      return new Response(
        JSON.stringify({ 
          success: true, 
          user: matchedUser,
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

  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
