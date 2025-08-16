import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not set');
}

export const resend = new Resend(process.env.RESEND_API_KEY);

// Email templates for RetentionLens
export const emailTemplates = {
  welcome: {
    subject: 'Welcome to RetentionLens',
    from: 'support@retentionlens.com',
  },
  support: {
    subject: 'Support Request - RetentionLens',
    from: 'support@retentionlens.com',
  },
  sales: {
    subject: 'Sales Inquiry - RetentionLens',
    from: 'sales@retentionlens.com',
  },
  research: {
    subject: 'Research Inquiry - RetentionLens',
    from: 'research@retentionlens.com',
  },
};

// Email sending functions
export async function sendWelcomeEmail(to: string, name: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: emailTemplates.welcome.from,
      to: [to],
      subject: emailTemplates.welcome.subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #059669;">Welcome to RetentionLens, ${name}!</h1>
          <p>Thank you for joining RetentionLens. We're excited to help you predict customer churn with 90%+ accuracy.</p>
          <p>Get started with our Test Suite to see the power of predictive analytics for your SaaS business.</p>
          <p>Best regards,<br>The RetentionLens Team</p>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending welcome email:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error };
  }
}

export async function sendSupportEmail(to: string, subject: string, message: string, userEmail: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: emailTemplates.support.from,
      to: [to],
      subject: `Support Request: ${subject}`,
      replyTo: userEmail,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">New Support Request</h2>
          <p><strong>From:</strong> ${userEmail}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin: 16px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending support email:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending support email:', error);
    return { success: false, error };
  }
}

export async function sendSalesInquiry(to: string, companyName: string, contactName: string, email: string, message: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: emailTemplates.sales.from,
      to: [to],
      subject: `Sales Inquiry from ${companyName}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">New Sales Inquiry</h2>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Contact:</strong> ${contactName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin: 16px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending sales inquiry:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending sales inquiry:', error);
    return { success: false, error };
  }
}

export async function sendResearchInquiry(to: string, researcherName: string, institution: string, email: string, researchTopic: string, message: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: emailTemplates.research.from,
      to: [to],
      subject: `Research Inquiry: ${researchTopic}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">New Research Inquiry</h2>
          <p><strong>Researcher:</strong> ${researcherName}</p>
          <p><strong>Institution:</strong> ${institution}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Research Topic:</strong> ${researchTopic}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin: 16px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending research inquiry:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending research inquiry:', error);
    return { success: false, error };
  }
}

