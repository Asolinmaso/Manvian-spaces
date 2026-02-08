import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  message: string;
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { firstName, lastName, email, contact, message } = body;

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: "First name, last name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    // In production: send email via Resend, SendGrid, Nodemailer, or save to DB
    // Example with Resend:
    // await Resend.emails.send({ from: '...', to: 'manvianspaces@gmail.com', subject: '...', html: ... });
    
    // For now: log payload (replace with your email/DB integration)
    console.info("[Contact Form]", { firstName, lastName, email, contact, message });

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll get back to you soon.",
    });
  } catch (e) {
    console.error("[Contact API]", e);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
