import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import twilio from "twilio";

const resend = new Resend(process.env.RESEND_API_KEY);
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req: NextRequest) {
  try {
    const { name, phone, service, message } = await req.json();

    if (!name || !phone || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailBody = `
      <h2>New Lead from OCCI Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message || "No message provided"}</p>
    `;

    const whatsappBody = `New lead from OCCI website!

Name: ${name}
Phone: ${phone}
Service: ${service}
Message: ${message || "None"}`;

    await Promise.all([
      resend.emails.send({
        from: "onboarding@resend.dev",
        to: process.env.NOTIFY_EMAIL!,
        subject: `New Lead: ${name} - ${service}`,
        html: emailBody,
      }),
      twilioClient.messages.create({
        from: process.env.TWILIO_WHATSAPP_FROM!,
        to: process.env.NOTIFY_WHATSAPP_TO!,
        body: whatsappBody,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
