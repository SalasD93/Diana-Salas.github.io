import React, { useState } from 'react';
// import { validateEmail } from '../../../utils/helper';
import Button from 'react-bootstrap/Button';
import './ContactStyles.css';

function ContactForm(props) {
  const [mailerState, setMailerState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  // const { name, email, message } = formState;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     console.log('Submit Form', formState);
  //   }
  // };
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <section id="contact-section">
      <h1 data-testid="h1tag">Contact me</h1>
      <p className="fs-4 text-center">If you would like to discuss possible job opportunities, please contact me directly at: <a href="mailto:salasd10418@gmail.com">salasd10418@gmail.com</a>.</p>
      <p className="fs-4 text-center">You can also reach me by phone: <a href="tel:4075769441">(407) 576-9441</a>.</p>
      <form className="rounded" id="contact-form" onSubmit={submitEmail}>
        <fieldset>
          <legend>Contact Form</legend>
          <div className="form-item text-white fs-5">
            <label htmlFor="name">Name:</label>
            <input className="text-center rounded" type="text" name="name" defaultValue={mailerState.name} onChange={handleStateChange} />
          </div>
          <div className="form-item text-white fs-5">
            <label htmlFor="email">Email address:</label>
            <input className="text-center rounded" type="email" name="email" defaultValue={mailerState.email} onChange={handleStateChange} />
          </div>
          <div className="form-item text-white fs-5">
            <label htmlFor="message">Message:</label>
            <textarea className="rounded mt-3" id="message-textarea" name="message" rows="5" defaultValue={mailerState.message} onChange={handleStateChange} />
          </div>
          {errorMessage && (
            <div className="text-danger fs-5">
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <Button data-testid="button" type="submit" variant="info" size="lg" id="contact-button">Submit</Button>{' '}
        </fieldset>
      </form>
    </section>
  );
}

export default ContactForm;