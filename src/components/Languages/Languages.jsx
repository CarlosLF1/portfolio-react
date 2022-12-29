import React from 'react';
import "./languages.css";

const Languages = () => {
  const data = [
    {
      title: "Languages",
      contents: ["Html", "CSS", "JavaScript", "NodeJs", "Express"]
    },
    {
      title: "Software",
      contents: ["VScode", "GitHub", "KanBan", "GIT"]
    },
    {
      title: "Database",
      contents: ["SQL", "MongoDB", "Contentful"]
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