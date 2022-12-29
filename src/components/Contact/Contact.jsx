import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-down">
      <strong>Whats Next?</strong>
      <h3>Let's work together!</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptas porro ut adipisci </p>
      <a href='mailto:carloslf@e.email' className='btn-link contact-btn'>
        Drop me an Email <i className="fa-solid fa-envelope"></i>
      </a>
    </section>
  )
}

export default Contact