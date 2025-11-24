import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Bad Request: Missing form fields.' });
  }

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT || '465', 10),
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_SERVER_USER}>`, // sender address
      to: process.env.EMAIL_TO, // list of receivers
      subject: `New Contact Form Submission from ${name}`, // Subject line
      replyTo: email,
      text: message, // plain text body
      html: `
        <h2>New Message from your Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `, // html body
    });

    res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ message: 'Failed to send message.' });
  }
}