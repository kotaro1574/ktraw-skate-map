import { NextRequest } from "next/server"
import { Resend } from "resend"

import { EmailTemplate } from "@/components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

const toEmail = process.env.EMAIL || ""

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    const { data, error } = await resend.emails.send({
      from: "Ktraw Skate Map 🗺️ <onboarding@resend.dev>",
      to: [toEmail],
      subject: `新しいお問い合わせ: ${name}様より`,
      react: EmailTemplate({ name, email, message }),
    })

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
