import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-intro">
        I’m currently open to new opportunities in web development, data analytics, and software engineering.
        I’d love to hear from you! Whether you have a question, an opportunity, or just want to say hello, please feel free to reach out using the form below.
      </p>

      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" placeholder="John" required />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Doe" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="you@example.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your message..." required />
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
