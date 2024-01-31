"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/helper-fun";

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Server side validation
  if (!validateString(senderEmail, 100)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 3000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "belaidimane@gmail.com",
      subject: `Message from contact form :: Portfolio`,
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
        return{
        error: getErrorMessage(error)
    }
  }
};
