import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <h3>Andrew Ochs</h3>
          <p>Creating digital experiences that make a difference.</p>
        </div>
        <div className="footer-links">
          <div className="footer-links-column">
            <h4>Sitemap</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h4>Social</h4>
            <ul>
              <li><a href="https://github.com/AndrewOchs" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/andrew-ochs-89210325a" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://x.com/dandy_mcdandles?s=21&t=IPgvTc6vMO0J_DGtZ3VLLw" target="_blank" rel="noreferrer">X</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Andrew Ochs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;