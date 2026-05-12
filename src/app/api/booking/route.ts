import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // The Google Apps Script Web App URL
    const WEBAPP_URL = process.env.GOOGLE_SHEET_WEBAPP_URL;

    if (!WEBAPP_URL) {
      console.error("GOOGLE_SHEET_WEBAPP_URL is not defined in environment variables.");
      return NextResponse.json(
        { success: false, error: "Server configuration error. Please contact support." },
        { status: 500 }
      );
    }

    // Google Apps Script requires following redirects
    const res = await fetch(WEBAPP_URL, {
      method: "POST",
      headers: { 
        "Content-Type": "text/plain;charset=utf-8" 
      },
      body: JSON.stringify(body),
      redirect: "follow"
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Google Sheets Error:", errorText);
      throw new Error("Failed to send data to Google Sheets");
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("[Booking API Error]:", err.message || err);
    return NextResponse.json(
      { success: false, error: "Failed to submit booking. Please try again." },
      { status: 500 }
    );
  }
}
