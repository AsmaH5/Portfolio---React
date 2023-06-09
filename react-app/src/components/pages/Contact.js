import React from 'react';
import "../styles/Contact.css";
import myCV from "../AsmaHassanCV.pdf"


const handleEmailClick = () => {
  window.location.href = 'mailto:asmasheikhhassan@gmail.com';
};

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Me</h2>
      <p>Please contact me using the form below:</p>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="submitBtn" type="submit">
          {formStatus}
        </button>
      </form>
      <hr className="line" />
      <div className="contactInfo">
        <h2 className='contactTitle'>Contact Information</h2>
        <ul>
          <li onClick={handleEmailClick} style={{ cursor: 'pointer' }}>asmasheikhhassan@gmail.com</li>
          <li>
            <a href={myCV} target="_blank" rel="noopener noreferrer">Download CV</a>
          </li>
          <li>
            <a href="https://github.com/AsmaH5" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/asma-h-757b14155/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
