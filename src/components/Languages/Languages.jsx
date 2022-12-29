import React from 'react';
import "./languages.css";

const Languages = () => {
  const data = [
    {
      title: "Languages",
      contents: ["Html5", "CSS3", "JavaScript", "React", "NodeJs", "Express"]
    },
    {
      title: "Software",
      contents: ["VScode", "GitHub", "Agile tools & Methodologies", "GIT", "SQL Workbench"]
    },
    {
      title: "Database",
      contents: ["SQL", "MongoDB", "Contentful","REST API's"]
    }
  ]
  return (
    <section id="languages" data-aos="fade">
      {
        data.map(item => (
          <div className='languages-box' key={item.title}>
            <h3>{item.title}</h3>
            <ul>
              {
                item.contents.map(content => (
                  <li key={content}>{content}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </section>
  )
}

export default Languages