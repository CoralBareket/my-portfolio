import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import WorkWith from './components/WorkWith';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
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
