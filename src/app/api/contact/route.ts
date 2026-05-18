import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, mobile, xProfile, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Send email to Varun
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'varun.pandey.bly@gmail.com',
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Mobile: ${mobile || 'N/A'}
X.com Profile: ${xProfile || 'N/A'}

Message:
${message}
      `,
    });

    // 2. Send auto-reply to the user
    await transporter.sendMail({
      from: `"Varun Pandey" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thanks for getting in touch!',
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for getting in touch! I have received your message and will get back to you as soon as I can.</p>
        <br>
        <p>Best regards,</p>
        <p>Varun Pandey</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
