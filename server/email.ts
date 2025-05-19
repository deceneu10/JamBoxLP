import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  establishmentName: string;
  establishmentType: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const to = "jambox.vibe@gmail.com";
    // Use the same email as the receiver for the from field
    // This is a workaround until you verify a sender domain in SendGrid
    const from = "jambox.vibe@gmail.com"; 

    await mailService.send({
      to,
      from,
      subject: `New Business Inquiry from ${formData.name} - ${formData.establishmentName}`,
      text: `
Name: ${formData.name}
Email: ${formData.email}
Establishment Name: ${formData.establishmentName}
Establishment Type: ${formData.establishmentType}

Message:
${formData.message}
      `,
      html: `
<h3>New Business Inquiry</h3>
<p><strong>Contact Name:</strong> ${formData.name}</p>
<p><strong>Email:</strong> ${formData.email}</p>
<p><strong>Establishment Name:</strong> ${formData.establishmentName}</p>
<p><strong>Establishment Type:</strong> ${formData.establishmentType}</p>
<p><strong>Message:</strong></p>
<p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}