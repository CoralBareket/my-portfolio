import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';
import '../styles/ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  return (
    <section className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
    </section>
  );
}

export default ProjectDetail;
