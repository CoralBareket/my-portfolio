import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import useToggle from '../hooks/useToggle';
import '../styles/Contact.css';

function Contact() {
  const [showForm, toggleForm] = useToggle(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();

    console.log('Form submitted');  // Debugging log

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setMessageSent(true);
        toggleForm(); // Hide form after sending the message
      }, (error) => {
        console.log('Failed to send the email. Please try again.', error.text);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me...</h2>
      <div className="contact-box">
        <div className="contact-content">
          <h3>Say, Hello!</h3>
          <div className="contact-email">
            <p>coral.bareket@gmail.com</p>
          </div>
          {!showForm && !messageSent && (
            <button className="contact-button" onClick={toggleForm}>
              Say, Hello
            </button>
          )}
          {messageSent && (
            <p className="thank-you-message">Thanks for sending the message!</p>
          )}
        </div>
        {showForm && !messageSent && (
          <form className="contact-form" onSubmit={handleSendEmail}>
            <textarea
              name="message"
              placeholder="Write your message here..."
              required
            />
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
