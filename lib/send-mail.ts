"use server";
import nodemailer from "nodemailer";

// Validate environment variables on module load
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

if (!SMTP_SERVER_USERNAME || !SMTP_SERVER_PASSWORD || !SITE_MAIL_RECIEVER) {
  throw new Error(
    "Missing required email environment variables. Please check SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, and SITE_MAIL_RECIEVER."
  );
}

// Create transporter once at module level for reuse
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
  email,
  subject,
  text,
  html,
}: {
  email: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    // Verify connection configuration
    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"Your Website" <${SMTP_SERVER_USERNAME}>`, // Better sender format
      replyTo: email,
      to: SITE_MAIL_RECIEVER,
      subject,
      text,
      html: html ? html : text.replace(/\n/g, "<br>"), // Fallback HTML
    });

    console.log("✅ Message sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ Mail sending failed:", error);

    // Return more detailed error information
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
        // Don't expose sensitive error details to client
        details:
          process.env.NODE_ENV === "development" ? error.stack : undefined,
      };
    }

    return { success: false, error: "Failed to send email" };
  }
}

// Optional: Add rate limiting helper
let emailsSentThisMinute = 0;
let lastResetTime = Date.now();

export async function sendMailWithRateLimit(
  params: Parameters<typeof sendMail>[0]
) {
  const now = Date.now();

  // Reset counter every minute
  if (now - lastResetTime > 60000) {
    emailsSentThisMinute = 0;
    lastResetTime = now;
  }

  // Limit to 10 emails per minute (adjust as needed)
  if (emailsSentThisMinute >= 10) {
    return {
      success: false,
      error: "Rate limit exceeded. Please try again later.",
    };
  }

  emailsSentThisMinute++;
  return sendMail(params);
}
