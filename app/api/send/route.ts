import { EmailTemplate } from '@/components/emailtemplate';
import { Resend } from 'resend';
import { NextRequest } from 'next/server';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

// Properly typed route handler for Next.js 15.5.7
export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <no-reply@oddward.space>',
      to: ['hey@oddward.space'],
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
    // Convert error to serializable format for Next.js 15.5.7 compatibility
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}

