import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  businessType?: unknown;
  message?: unknown;
  websiteCheck?: unknown;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const businessType = typeof body.businessType === "string" ? body.businessType.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const websiteCheck = Boolean(body.websiteCheck);

  const fieldErrors: Record<string, string> = {};

  if (name.length < 2) {
    fieldErrors.name = "Bitte gib deinen Namen an.";
  }
  if (!EMAIL_REGEX.test(email)) {
    fieldErrors.email = "Bitte gib eine gültige E-Mail-Adresse an.";
  }
  if (!businessType) {
    fieldErrors.businessType = "Bitte wähle eine Betriebsart aus.";
  }
  if (message.length < 10) {
    fieldErrors.message = "Erzähl uns kurz, worum es geht (mind. 10 Zeichen).";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { error: "Bitte überprüfe deine Angaben.", fieldErrors },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Elverix Kontakt <onboarding@resend.dev>",
    to: "justusharde@gmail.com",
    replyTo: email,
    subject: `Neue Anfrage von ${name} — ${businessType}`,
    html: `
      <h2>Neue Kontaktanfrage über elverix.com</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Betriebsart:</strong> ${businessType}</p>
      <p><strong>Website-Check gewünscht:</strong> ${websiteCheck ? "Ja" : "Nein"}</p>
      <hr />
      <p><strong>Nachricht:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
