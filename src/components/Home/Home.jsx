import React from 'react';
import "./home.css";
import CarlosPic from "../../assets/Carlos.jpeg";

const Home = () => {
  return (
    <section id="home">
      <div className="home-text" data-aos="fade-down">
        <strong>Howzit, it's me</strong>
        <h1>Carlos Ferraz</h1>
        <p>Obstacles are just challenges. My career has been filled with constant "change", this has never been something that I couldn't handle. In fact, I thrive in a changing environment and I love learning.</p>
        <a href='#summary' className='btn-link'>Scroll for more about me</a>
      </div>

      <div className="home-img" data-aos="fade-up">
        <div className="img-box">
          <img src={CarlosPic} alt="Carlos pic" />

          <h2>Carlos wiseManDev <br /><span>Full-Stack Developer</span></h2>

          <div className="social">
            <a href='https://github.com/CarlosLF1'>
              <i className="fa-brands fa-square-github"></i>
            </a>

            <a href='https://www.linkedin.com/in/carlos-ferraz-b205331/'>
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

          <a href='mailto:carloslf@e.email' className='hire-me'>Hire me</a>
        </div>
      </div>
    </section>
  )
}

export default Home