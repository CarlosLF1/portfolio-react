import React from 'react'
import "./process.css";

const Process = () => {
  const data = [
    {
      id: "01",
      title: "Pre-Process",
      contents: ["Research examples", "Persona", "Competition"]
    },
    {
      id: "02",
      title: "Pre-Planning",
      contents: ["Set up goals", "Mapping", "Project folder", "Wire-frame"]
    },
    {
      id: "03",
      title: "Creative-Planning",
      contents: ["Mood-board", "Color-pallets", "Fonts", "Dependencies required"]
    },
    {
      id: "04",
      title: "Pre-Build",
      contents: ["Github repo set up", "Kanban timing and task log" ,"Time-tracker", "Task-separation"]
    },
    {
      id: "05",
      title: "Build",
      contents: ["Collaborations set up", "BE - Server set up", "FE - Install dependencies and set up","Build"]
    },
    {
      id: "06",
      title: "Post-Build",
      contents: ["Checklist before merge", "Finalise", "Prep-deployment", "Test & bug-fix", "Deploy"]
    },
  ]

  return (
    <section id="process" data-aos="fade-down">
      <div className="process-heading">
        <h3>Process</h3>
      </div>

      <div className="process-container">
        {
          data.map(process => (
            <div className='process-box' key={process.id}>
              <span>{process.id}</span>
              <strong>{process.title}</strong>
              <ul>
                {
                  process.contents.map(content => (
                    <li key={content}>{content}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Process