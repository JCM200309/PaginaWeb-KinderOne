import { Resend } from "resend";


export const config = {
  api: {
    bodyParser: false, // CLAVE: si Vercel lo trata como API tipo Next
  },
};



export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fields, files } = await parseMultipart(req);

    const name = fields.name?.toString() || "";
    const email = fields.email?.toString() || "";
    const phone = fields.phone?.toString() || "";
    const message = fields.message?.toString() || "";

    if (!name || !email) {
      return res.status(400).json({ error: "Faltan campos obligatorios." });
    }

    // Logs útiles para Vercel
    console.log("TO_EMAIL:", process.env.TO_EMAIL);
    console.log("RESEND_API_KEY existe?", !!process.env.RESEND_API_KEY);
    console.log("FILES keys:", Object.keys(files || {}));

    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = `
      <h2>Solicitud de informacion:</h2>
      <p><b>Nombre:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Teléfono:</b> ${phone}</p>
      <p><b>Mensaje:</b> ${message}</p>`;

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.TO_EMAIL,
      subject: `Pedido de informacion de - ${name}`,
      replyTo: email,
      html,
      ...(attachments.length ? { attachments } : {}),
    });

    console.log("Resend result:", result);

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("ERROR API contactar.js: ", e);
    return res.status(500).json({ error: e?.message || "Error enviando el email." });
  }
}
