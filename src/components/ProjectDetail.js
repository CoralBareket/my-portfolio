import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';
import '../styles/ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
      <div className="project-images">
        <img src={project.image} alt={project.title} />
      </div>
    </section>
  );
}

export default ProjectDetail;
