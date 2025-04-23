
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

    // Parse request body
    const requestData = await req.json();
    
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Handle different operations based on the action parameter
    if (requestData.action === 'register') {
      // Handle face registration
      const { faceEncoding, name, rollNo } = requestData;
      
      if (!faceEncoding || !name || !rollNo) {
        throw new Error('Missing required fields for registration');
      }
      
      // Store the face encoding in the database
      const { data: user, error: insertError } = await supabaseClient
        .from('users')
        .insert({
          name,
          roll_no: rollNo,
          face_encoding: JSON.stringify(faceEncoding)
        })
        .select('*')
        .single();
      
      if (insertError) {
        throw insertError;
      }
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'User registered successfully',
          user 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } 
    else if (requestData.action === 'recognize') {
      // Handle face recognition for attendance
      const { faceEncoding } = requestData;
      
      if (!faceEncoding) {
        throw new Error('Missing face encoding for recognition');
      }
      
      // Get all users with their face encodings
      const { data: users, error: usersError } = await supabaseClient
        .from('users')
        .select('*')
        .not('face_encoding', 'is', null);
      
      if (usersError) {
        throw usersError;
      }
      
      console.log(`Found ${users.length} users with face encodings`);
      
      // Compare the new encoding with stored encodings
      // Note: In a production environment, you'd want to use a proper face recognition library
      // This is a simplified example - would benefit from using face_recognition package on the server
      let matchedUser = null;
      
      for (const user of users) {
        try {
          const storedEncoding = JSON.parse(user.face_encoding);
          
          // Example of basic Euclidean distance comparison
          // A proper implementation would use a specialized algorithm or library
          const distance = calculateEuclideanDistance(faceEncoding, storedEncoding);
          console.log(`Distance for user ${user.name}: ${distance}`);
          
          // Threshold can be adjusted for sensitivity
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
        // Log attendance
        const { data: attendance, error: attendanceError } = await supabaseClient
          .from('attendance')
          .insert({
            user_id: matchedUser.id,
            status: 'present'
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
function calculateEuclideanDistance(encoding1, encoding2) {
  if (!Array.isArray(encoding1) || !Array.isArray(encoding2) || encoding1.length !== encoding2.length) {
    throw new Error('Invalid encodings provided for comparison');
  }
  
  let sum = 0;
  for (let i = 0; i < encoding1.length; i++) {
    sum += Math.pow(encoding1[i] - encoding2[i], 2);
  }
  return Math.sqrt(sum);
}
