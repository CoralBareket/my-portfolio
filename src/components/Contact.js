import React from 'react';
import useContactForm from '../hooks/useContactForm';
import useToggle from '../hooks/useToggle';
import '../styles/Contact.css';

function Contact() {
  const [showForm, toggleForm] = useToggle(false);
  const { message, isSubmitted, handleMessageChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me...</h2>
      <div className="contact-box">
        <div className="contact-content">
          <h3>Say, Hello!</h3>
          <div className="contact-email">
            <p>coral.bareket@gmail.com</p>
          </div>
          {!showForm && !isSubmitted && (
            <button className="contact-button" onClick={toggleForm}>
              Say, Hello
            </button>
          )}
          {isSubmitted && (
            <p className="thank-you-message">Thanks for sending the message!</p>
          )}
        </div>
        {showForm && !isSubmitted && (
          <form className="contact-form" onSubmit={handleSubmit}>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={message}
              onChange={handleMessageChange}
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
