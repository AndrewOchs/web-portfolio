import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use navigate instead of Link
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigate
  
  // Functions to handle button clicks
  const handleWorkClick = () => {
    navigate('/projects');
  };
  
  const handleContactClick = () => {
    navigate('/contact');
  };
  
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Hi, I'm <span className="highlight">Andrew Ochs</span></h1>
          <h2>I create <span className="highlight">digital solutions</span> that delight users</h2>
          <p>Frontend Developer | Software Engineer | Problem Solver</p>
          <div className="hero-buttons">
            <button onClick={handleWorkClick} className="btn">View My Work</button>
            <button onClick={handleContactClick} className="btn btn-outline">Get In Touch</button>
          </div>
        </motion.div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-placeholder">
            <div className="hero-shape"></div>
          </div>
        </motion.div>
      </div>
      <div className="hero-scroll">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="scroll-arrows">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;