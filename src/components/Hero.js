import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>I'm Coral Bareket.</h1>
        <p>Full-stack developer passionate about coding and always eager to learn and create</p>
      </div>
      <div className="hero-image">
        <img src="path_to_your_image.jpg" alt="Coral Bareket" />
      </div>
    </section>
  );
}

export default Hero;
