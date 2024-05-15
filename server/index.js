import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';

import authRoutes from './routes/auth.routes.js';
import foodDonationRoutes from './routes/fooddonation.routes.js';
import allFoodRoutes from './routes/allfood.routes.js';
import userRoutes from './routes/user.routes.js';
import volunteerRoutes from './routes/volunteerRoutes.js';
import connectDB from './config/mongo.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(cors());

connectDB();

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'plateshare.info@gmail.com',
    pass: 'enmm rdmh otkh plzx'
  }
});

// Email sending API endpoint
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'platshare.info@gmail.com',
    to: 'plateshare.info@gmail.com, yashsd99@gmail.com',
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}, We will get back to you shortly. Keep Sharing`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send('Error sending email: ' + error.message);
    }
    console.log('Email sent: ' + info.response);
    res.send('Email sent successfully');
  });
});

app.use('/', authRoutes);
app.use('/', foodDonationRoutes);
app.use('/', allFoodRoutes);
app.use('/', userRoutes);
app.use('/', volunteerRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
