import React from 'react';
import { FaJava, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiPython, SiSocketdotio, SiMysql } from 'react-icons/si';
import '../styles/WorkWith.css';

function WorkWith() {
  return (
    <section id="work-with" className="work-with">
      <h2>Work With</h2>
      <div className="icons-container">
        <div className="icon">
          <FaJava className="java" />
          <p>Java</p>
        </div>
        <div className="icon">
          <SiJavascript className="javascript" />
          <p>JavaScript</p>
        </div>
        <div className="icon">
          <SiPython className="python" />
          <p>Python</p>
        </div>
        <div className="icon">
          <FaReact className="react" />
          <p>React</p>
        </div>
        <div className="icon">
          <FaNodeJs className="nodejs" />
          <p>Node.js</p>
        </div>
        <div className="icon">
          <SiSocketdotio className="socketio" />
          <p>Socket.io</p>
        </div>
        <div className="icon">
          <SiMysql className="mysql" />
          <p>SQL</p>
        </div>
      </div>
    </section>
  );
}

export default WorkWith;
