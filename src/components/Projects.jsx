import React from 'react';
import './Projects.css';
import datapre from './assets/image.png'
import gtams from './assets/gtams.png'
import gemini from './assets/gemini.png'
import lonbike from './assets/lonbike.png'
import netflix from './assets/netflix.png'

const projects = [
  {
    title: "Lang2SQL",
    image: datapre,
    techStack: ["Python", "Gemini LLM API", "Streamlit", "SQLite", "Pandas"]
  },

  {
    title: "Data Preprocessing Toolkit",
    image: datapre,
    techStack: ["Python", "Pandas", "Streamlit", "HTML", "CSS"]
  },

  {
    title: "Graduate Teaching Assistantship Management System",
    image: gtams,
    techStack: ["React", "Node.js", "Supabase", "CSS"]
  },

  {
    title: "Gemini Clone",
    image: gemini,
    techStack: ["React", "Gemini LLM API", "CSS"]
  },

  {
    title: "London Bikes Dashboard",
    image: lonbike,
    techStack: ["Python", "Tableau"]
  },

  {
    title: "Netflix Dashboard",
    image: netflix,
    techStack: ["Python", "Tableau"]
  },
];

function Projects() {
  return (
    <div className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-wrapper" key={index}>
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <h4 className="project-title">{project.title}</h4>
            <div className="tech-stack">
              {project.techStack.map((tech, idx) => (
                <span className="tech-tag" key={idx}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
