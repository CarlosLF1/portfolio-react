import React from 'react';
import "./home.css";
import CarlosPic from "../../assets/Carlos.jpeg";

const Home = () => {
  return (
    <section id="home">
      <div className="home-text">
        <strong>Hello, it's me</strong>
        <h1>Carlos wiseManDev</h1>
        <p>This is all about me. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nam soluta fugiat voluptatum accusamus quo voluptas earum ducimus, deserunt laudantium ipsam accusantium ullam nostrum quaerat expedita cupiditate odit dolorum blanditiis.</p>
        <a href='#summary' className='btn-link'>Scroll for more about me</a>
      </div>

      <div className="home-img">
        <div className="img-box">
          <img src={CarlosPic} alt="Carlos pic" />

          <h2>Carlos wiseManDev <br /><span>Full-Stack Developer</span></h2>

          <div className="social">
            <a href='#!'>
              <i className="fa-brands fa-square-github"></i>
            </a>

            <a href='#!'>
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

          <a href='#' className='hire-me'>Hire me</a>
        </div>
      </div>
    </section>
  )
}

export default Home