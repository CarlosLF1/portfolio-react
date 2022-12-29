import React from 'react';
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-heading" data-aos="flip-left">
          <strong>About me</strong>
          <h3>Building with passion for problem solving</h3>
          <a href='Cell:0401712418' className='btn-link'>
            +358 (0)40 171 2418 <i className="fa-solid fa-phone-flip"></i>
          </a>
        </div>

        <div className="about-details" data-aos="flip-right">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda soluta ratione recusandae nihil ipsa ea, quis magnam architecto ut molestiae, rerum, inventore minus officia esse quia perspiciatis itaque eligendi dolores.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda soluta ratione recusandae nihil ipsa ea, quis magnam architecto ut molestiae, rerum, inventore minus officia esse quia perspiciatis itaque eligendi dolores.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda soluta ratione recusandae nihil ipsa ea, quis magnam architecto ut molestiae, rerum, inventore minus officia esse quia perspiciatis itaque eligendi dolores.</p>
        </div>
      </div>
    </section>
  )
}

export default About