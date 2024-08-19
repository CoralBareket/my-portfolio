import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import WorkWith from './components/WorkWith';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useDarkMode from './hooks/useDarkMode';
import './styles/App.css';

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <Router>
      <Header toggleDarkMode={toggleDarkMode} /> {/* Pass the toggle function as a prop */}
      <Hero />
      <About />
      <Projects />
      <WorkWith />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
