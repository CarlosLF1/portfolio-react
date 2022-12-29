import React from 'react'
import "./career.css";
import CV from "../../assets/CarlosCV.pdf";

const Career = () => {
  const careers = [
    {
      title: "Full-stack Dev",
      name: "Student",
      year: "2021 - 2022"
    },
    {
      title: "Growth Consultant",
      name: "DoppelHaus",
      year: "2021 - 2022"
    },
    {
      title: "Growth and business development SaaS",
      name: "Artify & Uku",
      year: "2022 - 2021"
    },
    {
      title: "Founder and growth specialist",
      name: "Credo TM",
      year: "2006 - 2021"
    },
  ]

   const education = [
    {
      title: "Full-stack Web-Dev",
      name: "Student",
      year: "2021 - 2022"
    },
    {
      title: "Masters in Business Administration",
      name: "Business School Netherlands",
      year: "2000 - 2003"
    },
    {
      title: "Marketing Management Dip",
      name: "Institute of Marketing Management",
      year: "prior"
    },
    {
      title: "Founder and growth specialist",
      name: "Credo TM Entrepreneurship",
      year: "2006 - 2021"
    },
  ]
  return (
    <section id="career">
      <div className="career-education">
        <div className="career" data-aos="fade-right">
          <h3>Career</h3>

          <div className="c-b-container">
            {
              careers.map((career, index) => (
                <div className="c-box" key={index}>
                  <h4>{career.title}</h4>
                  <strong>{career.name}</strong>
                  <span>{career.year}</span>
                </div>
              ))
            }
          </div>
        </div>

         <div className="career-edu" data-aos="fade-left">
          <h3>Education</h3>

          <div className="c-b-container">
            {
              education.map((career, index) => (
                <div className="c-box" key={index}>
                  <h4>{career.title}</h4>
                  <strong>{career.name}</strong>
                  <span>{career.year}</span>
                </div>
              ))
            }
          </div>
        </div> 
      </div>

      <div className="btn-c">
          <a href={CV} download className='btn-link'>
            Get my CV <i className="fa-solid fa-download"></i>
          </a>
        </div>
    </section>
  )
}

export default Career