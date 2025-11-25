// Import required packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { Resend } = require('resend');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3001;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// --- ROUTES ---

// Default route
app.get('/', (req, res) => {
  res.send('Express server for Resend is running!');
});

// POST route to handle sending emails
app.post('/api/send', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // This must be a verified domain on Resend
      to: 'francisbucci2@gmail.com', // The email address you want to receive messages at
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>8
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    if (error) {
      console.error({ error });
      return res.status(500).json({ error: 'Error sending email.' });
    }

    console.log({ data });
    res.status(200).json({ message: 'Email sent successfully!', data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
