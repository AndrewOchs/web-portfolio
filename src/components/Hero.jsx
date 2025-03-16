import { motion } from 'framer-motion';
import { default as React, default as React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Use navigate instead of Link
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['websites', 'applications', 'experiences', 'digital solutions'];
  const typingSpeed = 100; // milliseconds per character
  const pauseTime = 1000; // time to pause after word is complete

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    // Handle the typing effect
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        
        // If word is complete, pause then start deleting
        if (displayText === currentWord) {
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        // Deleting
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        
        // If deleted, move to next word
        if (displayText === '') {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);

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
          <h2>I create <span className="highlight-typewriter">{displayText}</span> that delight users</h2>
          <p>UX Enthusiast | Software Developer | Problem Solver</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn" style={{ cursor: 'pointer', pointerEvents: 'auto' }}>View My Work</Link>
            <Link to="/contact" className="btn btn-outline" style={{ cursor: 'pointer', pointerEvents: 'auto' }}>Get In Touch</Link>
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