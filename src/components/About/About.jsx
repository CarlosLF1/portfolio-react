import React from 'react';
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-heading" data-aos="flip-left">
          <strong>About me</strong>
          <h3>Building with a passion to change peoples lives</h3>
          <a href='Cell:0401712418' className='btn-link'>
            +358 (0)40 171 2418 <i className="fa-solid fa-phone-flip"></i>
          </a>
        </div>

        <div className="about-details" data-aos="flip-right">
          <p>A long history of working in challenging environments. A very adaptive mindset to overcome obstacles.</p>
          <p>Inter-personal skills and people skills are a main strength. Working in a team that is working towards a noble goal is extremely incentivising.</p>
          <p>Making a difference in a user/clients life with the app that we build will remain a main focus.</p>
          <p>An environment of creativity and ideas is my preferred workplace.</p>
        </div>
      </div>
    </section>
  )
}

export default About