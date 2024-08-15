import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import '../styles/Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
