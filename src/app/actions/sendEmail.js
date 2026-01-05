"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: ["himanshuazad05@gmail.com"],
      subject: `New message from ${name}`,
      reply_to: email,
      text: `
      Name: ${name}
      Email: ${email}
      Message:
      ${message}
            `,
    });

    return { success: true, data: "Email sent successfully" };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email", error);
  }
}
