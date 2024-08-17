import React from 'react';
import projects from '../data/projects';
import '../styles/Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Know More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
