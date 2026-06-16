import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, type, message } = await req.json();

    if (!name || !email || !type || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    // Proxy to Formspree to hide endpoint from network tab
    const formspreeResponse = await fetch("https://formspree.io/f/mwvjzwyq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, type, message }),
    });

    const data = await formspreeResponse.json();

    if (!formspreeResponse.ok) {
      return NextResponse.json(
        { error: data.error ?? "Failed to send message." },
        { status: formspreeResponse.status },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
