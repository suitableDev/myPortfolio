"use server";

import { Resend } from "resend"
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");


  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try{
    await resend.emails.send({
        from: "My Contact Form <myPortfolio@resend.dev>",
        to: "rinzencex@gmail.com",
        subject: "Message from contact form",
        reply_to: senderEmail,
        text: message,
        })
  } catch(error: unknown){
    return {
      error: getErrorMessage(error)
    }
    }
}