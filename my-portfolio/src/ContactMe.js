import React from 'react';
import './ContactMe.css';

function ContactMe() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p className="mb-4">
        Do you have a project in your mind that you want to be brought to life? Do you need a partner? Looking for a front-end developer? Or do you have some feedback for me? Send me a message!
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Write your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" placeholder="Email Address" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" placeholder="Write your message here" required></textarea>
        </div>
        <button type="submit" className="send-button">Send</button>
      </form>
    </section>
  );
}

export default ContactMe;