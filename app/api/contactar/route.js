import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/contactar";

export async function POST(req) {
  try {
    
    await sendContactEmail(req);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.error("API /api/contactar error:", e);
    return NextResponse.json(
      { error: e?.message || "Error enviando el email." },
      { status: 500 }
    );
  }
}
