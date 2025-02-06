import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <p>From: {name} {email}!</p>
    <em>Hey, I am {name}, you can email me at {email} and this is my message:</em>
    <p className='my-4'>      
      {message}
    </p>
  </div>
);