import { motion } from 'framer-motion';
import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './Home.css';

const Home = () => {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      <section className="section about-preview">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-preview-content">
            <div className="about-preview-text">
              <p>I'm a passionate developer who loves creating beautiful and functional websites. With a strong background in frontend development and a keen eye for design, I strive to build digital experiences that users love.</p>
              <p>My journey in web development started in [year], and since then I've worked on numerous projects ranging from simple landing pages to complex web applications.</p>
              <a href="/about" className="btn">Learn More About Me</a>
            </div>
            <div className="about-preview-skills">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>HTML5 & CSS3</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React.js</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Webpack</li>
                  <li>Figma</li>
                  <li>VS Code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section projects-preview">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="view-all">
            <a href="/projects" className="btn">View All Projects</a>
          </div>
        </div>
      </section>
      
      <section className="section contact-preview">
        <div className="container">
          <div className="contact-preview-content">
            <h2>Let's Work Together</h2>
            <p>Have a project in mind or just want to say hello? I'd love to hear from you!</p>
            <a href="/contact" className="btn">Get In Touch</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;