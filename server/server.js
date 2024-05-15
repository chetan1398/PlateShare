import express from "express";
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import initialize from "./app/app.js";

dotenv.config();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const port = process.env.PORT;

// Setup NodeMailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Using Gmail service
  auth: {
    user: process.env.EMAIL_USER, // Email configured in your environment variables
    pass: process.env.EMAIL_PASS // Password configured in your environment variables
  }
});

// Endpoint to handle sending emails
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // or your own email if preferred
    to: process.env.EMAIL_USER, // Email that will receive the message
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent: ' + info.response);
    res.send('Email sent successfully');
  });
});

initialize(app);

app.listen(port, () => console.log(`Server is running on port ${port}`));
