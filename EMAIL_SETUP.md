# EmailJS Setup Guide

This guide will help you set up EmailJS to handle contact form submissions for the MadeByNavie portfolio website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

### Main Contact Template

**Template Name:** `contact_form`

**Subject:** `New Contact Form Submission from {{from_name}}`

**Content:**
\`\`\`
Hello Divine,

You have received a new contact form submission from your portfolio website.

Contact Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Company: {{company}}
- Project Type: {{project_type}}
- Budget Range: {{budget_range}}

Message:
{{message}}

Submitted on: {{timestamp}}

Best regards,
MadeByNavie Contact System
\`\`\`

### Auto-Reply Template (Optional)

**Template Name:** `template_autoreply`

**Subject:** `Thank you for contacting MadeByNavie!`

**Content:**
\`\`\`
Hi {{to_name}},

Thank you for reaching out about {{project_type}} for {{company}}!

I've received your message and will get back to you within 24 hours to discuss your project in detail.

In the meantime, feel free to check out my latest work on my portfolio or connect with me on social media.

Looking forward to collaborating with you!

Best regards,
Divine Nnaji
MadeByNavie
hello@madebynavie.com
\`\`\`

## Step 4: Get Your Credentials

1. Go to **Account** → **General**
2. Copy your **Public Key**
3. Note down your **Service ID** from Step 2
4. Note down your **Template ID** from Step 3

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in your project root
2. Add your EmailJS credentials:

\`\`\`env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
\`\`\`

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the contact form submission
5. Verify the auto-reply was sent (if configured)

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure your domain is added to EmailJS allowed origins
2. **Template Not Found**: Double-check your template ID
3. **Service Not Found**: Verify your service ID
4. **Authentication Failed**: Confirm your public key is correct

### Rate Limits:

- Free plan: 200 emails/month
- Paid plans available for higher volumes

### Security Notes:

- Public key is safe to expose in frontend code
- Never expose your private key
- Consider implementing rate limiting for production

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

## Alternative Services

If you prefer other email services:
- **Resend**: Modern email API with great developer experience
- **SendGrid**: Enterprise-grade email service
- **Mailgun**: Powerful email automation
- **Nodemailer**: Self-hosted solution with SMTP
