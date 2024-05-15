import React, { useState } from 'react';
import './ContactForm.css';

//Function display the contact form
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.text(); // Assuming the server sends back a success message
      alert(result); // Display the success message from the server
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email.'); // Display a generic error message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
