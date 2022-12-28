import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <span>Copyright &copy;2022</span>

      <div className="social-links">
        <a href='#!'>
          <i className="fa-brands fa-linkedin"></i>
        </a>
         <a href='#!'>
          <i className="fa-brands fa-square-github"></i>
        </a>
         <a href='#!'>
          <i className="fa-brands fa-discord"></i>
        </a>
      </div>

      <a href='#!' className='footer-logo'>Carlos.dev</a>
    </footer>
  )
}

export default Footer