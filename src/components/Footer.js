import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <p>© 2024 Coral Bareket. All Rights Reserved.</p>
      <p>
        <a href="https://www.linkedin.com/in/coral-bareket-97b886216/">
          <FaLinkedin className="icon icon-linkedin" /> LinkedIn
        </a> |
        <a href="https://github.com/CoralBareket">
          <FaGithub className="icon icon-github" /> GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;
