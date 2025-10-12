import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface AppointmentData {
  patientName: string;
  email: string;
  phone: string;
  appointmentDate: string;
  appointmentTime: string;
  message?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 200, headers: corsHeaders });

  try {
    const appointmentData: AppointmentData = await req.json();

    // Twilio SMS to doctor
    const twilioAccountSid = Deno.env.get("TWILIO_ACCOUNT_SID");
    const twilioAuthToken = Deno.env.get("TWILIO_AUTH_TOKEN");
    const twilioPhoneNumber = Deno.env.get("TWILIO_PHONE_NUMBER");
    const doctorPhone = "+91YOURDOCTORPHONENUMBER"; // Replace with actual doctor phone number
    if (twilioAccountSid && twilioAuthToken && twilioPhoneNumber) {
      const smsBody = `New Appointment at Clinic\nPatient: ${appointmentData.patientName}\nPhone: ${appointmentData.phone}\nDate: ${appointmentData.appointmentDate}\nTime: ${appointmentData.appointmentTime}`;
      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`;
      const twilioAuth = btoa(`${twilioAccountSid}:${twilioAuthToken}`);
      const twilioResponse = await fetch(twilioUrl, {
        method: "POST",
        headers: { "Authorization": `Basic ${twilioAuth}`, "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ To: doctorPhone, From: twilioPhoneNumber, Body: smsBody }),
      });
      if (!twilioResponse.ok) throw new Error('Twilio SMS failed');
    }

    // SendGrid Email to doctor and patient
    const sendGridApiKey = Deno.env.get("SENDGRID_API_KEY");
    const sendGridFromEmail = Deno.env.get("SENDGRID_FROM_EMAIL") || "clinic@example.com";
    if (sendGridApiKey) {
      // Email to doctor
      const clinicEmailData = {
        personalizations: [{ to: [{ email: sendGridFromEmail }], subject: "New Appointment Booking" }],
        from: { email: sendGridFromEmail },
        content: [{ type: "text/html", value: `
          <div><h2>New Appointment Booking</h2>
          <p><strong>Patient Name:</strong> ${appointmentData.patientName}</p>
          <p><strong>Email:</strong> ${appointmentData.email}</p>
          <p><strong>Phone:</strong> ${appointmentData.phone}</p>
          <p><strong>Appointment Date:</strong> ${appointmentData.appointmentDate}</p>
          <p><strong>Appointment Time:</strong> ${appointmentData.appointmentTime}</p>
          <p><strong>Message:</strong> ${appointmentData.message || "N/A"}</p></div>
        `}],
      };
      const clinicResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: { "Authorization": `Bearer ${sendGridApiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify(clinicEmailData),
      });
      if (!clinicResponse.ok) throw new Error('SendGrid email to clinic failed');

      // Confirmation to patient
      const patientEmailData = {
        personalizations: [{ to: [{ email: appointmentData.email }], subject: "Appointment Confirmation" }],
        from: { email: sendGridFromEmail },
        content: [{ type: "text/html", value: `
          <div><h2>Appointment Confirmation</h2>
          <p>Dear ${appointmentData.patientName},</p>
          <p>Your appointment has been successfully booked.</p>
          <p><strong>Appointment Date:</strong> ${appointmentData.appointmentDate}</p>
          <p><strong>Appointment Time:</strong> ${appointmentData.appointmentTime}</p></div>
        `}],
      };
      const patientResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: { "Authorization": `Bearer ${sendGridApiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify(patientEmailData),
      });
      if (!patientResponse.ok) throw new Error('SendGrid email to patient failed');
    }

    return new Response(JSON.stringify({ success: true }), { headers: corsHeaders, status: 200 });
  } catch (error) {
    console.error('Edge Function error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { headers: corsHeaders, status: 500 });
  }
});