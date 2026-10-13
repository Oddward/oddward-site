import { EmailTemplate } from '@/components/emailtemplate';
import { Resend } from 'resend';
import { NextRequest } from 'next/server';
import React from 'react';

export async function POST(request: NextRequest) {
  // Created per request so `next build` doesn't need RESEND_API_KEY
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return Response.json({ error: 'Contact form is not configured' }, { status: 500 });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const formData = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <no-reply@oddward.space>',
      to: ['hey@oddward.space'],
      replyTo: formData.email,
      subject: 'Contact via oddward.space',
      // Use React.createElement to ensure proper ReactElement type for Resend
      react: React.createElement(EmailTemplate, formData),
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}

