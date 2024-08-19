import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import useDarkMode from '../hooks/useDarkMode';
import '../styles/Header.css';

function Header() {
  const [isDarkMode, toggleMode] = useDarkMode();

  return (
    <header>
      <div className="toggle-button">
        <label className="switch">
          <input 
            type="checkbox" 
            checked={isDarkMode} 
            onChange={toggleMode} 
          />
          <span className="slider round"></span>
        </label>
      </div>
      <nav>
        <ul>
          <li>
            <ScrollLink to="hero" smooth={true} duration={500}>Home</ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500}>About Me</ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
          </li>
        </ul>
      </nav>
      <a href="#contact" className="cta-button">Hire Me</a>
    </header>
  );
}

export default Header;
