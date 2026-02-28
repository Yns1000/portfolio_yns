import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // For Resend Sandbox, emails MUST go to the verified account owner
    const destinationEmail = 'younes.bgrt@icloud.com';

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: destinationEmail,
      subject: `New message from ${name} via your Portfolio`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (data.error) {
     return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
