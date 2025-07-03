import emailjs from "@emailjs/browser"

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id"
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id"
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key"

export interface EmailData {
  name: string
  email: string
  company?: string
  project?: string
  budget?: string
  message: string
}

// Sends an email using EmailJS with the provided data
export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Initialize EmailJS (only needs to be done once)
    emailjs.init(EMAILJS_PUBLIC_KEY)

    // Prepare template parameters
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      company: data.company || "Not specified",
      project_type: data.project || "Not specified",
      budget_range: data.budget || "Not specified",
      message: data.message,
      to_name: "Divine Nnaji",
      to_email: "dnnaji26@gmail.com",
      reply_to: data.email,
      // Add timestamp for reference
      timestamp: new Date().toLocaleString(),
    }

    // Send email using EmailJS
    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)

    if (response.status === 200) {
      return {
        success: true,
        message: "Your message has been sent successfully! I'll get back to you within 24 hours.",
      }
    } else {
      throw new Error("Failed to send email")
    }
  } catch (error) {
    console.error("Email sending error:", error)

    // Return user-friendly error message
    return {
      success: false,
      message:
        "Sorry, there was an issue sending your message. Please try again or contact me directly at hello@madebynavie.com",
    }
  }
}

// Auto-reply email function
export const sendAutoReply = async (data: EmailData): Promise<void> => {
  try {
    const autoReplyParams = {
      to_name: data.name,
      to_email: data.email,
      from_name: "Divine Nnaji",
      from_email: "hello@madebynavie.com",
      project_type: data.project || "your project",
      company: data.company || "your organization",
    }

    // Send auto-reply (you'll need a separate template for this)
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      "template_autoreply", // You'll need to create this template
      autoReplyParams,
    )
  } catch (error) {
    console.error("Auto-reply error:", error)
    // Don't throw error for auto-reply failure
  }
}
