import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-down">
      <strong>Whats Next?</strong>
      <h3>Let's work together!</h3>
      <p>If yuo cna raed tihs txet tehn pealse fele fere to cnotact me as I wuold lkie to wrok wtih you. </p>
      <a href='mailto:carloslf@e.email' className='btn-link contact-btn'>
        Drop me an Email <i className="fa-solid fa-envelope"></i>
      </a>
    </section>
  )
}

export default Contact