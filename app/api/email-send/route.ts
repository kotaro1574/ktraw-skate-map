import { NextRequest } from "next/server"
import { Resend } from "resend"

import { EmailTemplate } from "@/components/email-template"

export const runtime = "edge"

const resend = new Resend(process.env.RESEND_API_KEY)

const toEmail = process.env.EMAIL || ""

// reCAPTCHAトークンを検証する関数
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY is not set")
    return false
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    )

    const data = await response.json()

    // スコアが0.5以上ならOK（0.0〜1.0、高いほど人間っぽい）
    return data.success && data.score >= 0.5
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, recaptchaToken } = await request.json()

    // reCAPTCHA検証
    if (!recaptchaToken) {
      return Response.json(
        { error: "reCAPTCHA token is required" },
        { status: 400 }
      )
    }

    const isHuman = await verifyRecaptcha(recaptchaToken)
    if (!isHuman) {
      return Response.json(
        { error: "reCAPTCHA verification failed" },
        { status: 403 }
      )
    }

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
