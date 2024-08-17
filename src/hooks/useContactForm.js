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
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { message }, 'YOUR_USER_ID')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setIsSubmitted(true);  // Mark the form as submitted
      }, (error) => {
        console.log('Failed to send the email. Please try again.', error.text);
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
