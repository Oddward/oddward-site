import { EmailTemplate } from '@/components/emailtemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST( request ) {
  try {
    const formData = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <no-reply@oddward.space>',
      to: ['hey@oddward.space'],
      subject: 'Contact via oddward.space',
      react: EmailTemplate({ ...formData }),
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
