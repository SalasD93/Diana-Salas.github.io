import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helper';
import Button from 'react-bootstrap/Button';
import './ContactStyles.css';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section id="contact-section">
      <h1 data-testid="h1tag">Contact me</h1>
      <p className="fs-4 text-center">This form is currently under maintenance. Please contact me directly at: salasd10418@gmail.com.</p>
      <form className="rounded" id="contact-form" onSubmit={handleSubmit}>
        <div className="form-item text-white fs-5">
          <label htmlFor="name">Name:</label>
          <input className="text-center rounded" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="form-item text-white fs-5">
          <label htmlFor="email">Email address:</label>
          <input className="text-center rounded" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="form-item text-white fs-5">
          <label htmlFor="message">Message:</label>
          <textarea className="rounded mt-3" id="message-textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div className="text-danger fs-5">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button data-testid="button" type="submit" variant="info" size="lg" id="contact-button">Submit</Button>{' '}
      </form>
    </section>
  );
}

export default ContactForm;