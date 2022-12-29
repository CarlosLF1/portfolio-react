import React from 'react';
import "./summary.css";
import CV from "../../assets/CarlosCV.pdf";

const Summary = () => {
  return (
    <section id="summary">
      <div className="summary-heading" data-aos="fade-right">
        <strong>My Skillset</strong>

        <h2>Here are my hard-skills listed for your convenience</h2>

        <a href={CV} download className='btn-link'>
          Access my CV <i className="fa-solid fa-download"></i>
        </a>
      </div>

      <div className="summary-details" data-aos="fade-left">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptatum minus odio provident numquam maxime laboriosam necessitatibus est, veniam a magnam odit recusandae qui molestiae totam laudantium, pariatur cupiditate dignissimos.
        </p>
      </div>
    </section>
  )
}

export default Summary