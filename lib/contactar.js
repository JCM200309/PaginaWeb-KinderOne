import { Resend } from "resend";

export async function sendContactEmail({ name, email, phone, message }) {
  if (!name || !email) {
    throw new Error("Faltan campos obligatorios (nombre y email).");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `
    <h2>Solicitud de información</h2>
    <p><b>Nombre:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Teléfono:</b> ${phone || ""}</p>
    <p><b>Mensaje:</b> ${message || ""}</p>
  `;

  console.log(html);

  await resend.emails.send({
    from: "Kinder One <contacto@mail.jardinkinderone.com.ar>", 
    to: process.env.TO_EMAIL,
    subject: `Pedido de información - ${name}`,
    replyTo: email,
    html,
  });

  console.log("Email enviado correctamente.")
}
