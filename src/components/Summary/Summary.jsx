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
          Call me a dreamer. I am a creative. thinking of new ideas and concepts are what drive me as a developer. Problem solving and planning are the backbone but the idea of breaking new ground is the thrill and the "high".
        </p>
      </div>
    </section>
  )
}

export default Summary