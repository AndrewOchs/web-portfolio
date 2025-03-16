import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
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
          <h2>I create <span className="word-rotation">
            <span>websites</span>
            <span>applications</span>
            <span>experiences</span>
          </span> that delight users</h2>
          <div className="hero-buttons">
            <NavLink to="/projects" className="btn">View My Work</NavLink>
            <NavLink to="/contact" className="btn btn-outline">Get In Touch</NavLink>
          </div>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-placeholder">
            {/* Replace with your image */}
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