import { useState } from 'react';
import emailjs from 'emailjs-com';

function useContactForm() {
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending the email using EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      setMessageSent(true);
      toggleForm(); // Hide form after sending the message
    }).catch((error) => {
      console.log('Failed to send the email. Please try again.', error);
    });  
  };

  return {
    message,
    isSubmitted,
    handleMessageChange,
    handleSubmit,
  };
}

export default useContactForm;
