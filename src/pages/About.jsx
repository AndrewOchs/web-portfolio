import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-header">
        <div className="container">
          <h1>About Me</h1>
        </div>
      </div>
      
      <section className="section about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="image-placeholder">
                {/* Replace with your image */}
                <div className="about-shape"></div>
              </div>
            </div>
            <div className="about-text">
              <h2>Hi, I'm Andrew Ochs</h2>
              <p className="lead">A passionate web developer based in Philadelphia PA.</p>
              <p>I specialize in creating both responsive websites and robust software applications. With a strong foundation in Computer Science fundamentals and practical experience in both frontend and backend technologies, I enjoy building comprehensive solutions that solve real problems.</p>
              <p>My journey into web development began in 2023 when I was given the opportunity to overhaul my hometown website. Since then, I've expanded my skills to include system-level programming, developing custom command line interfaces, implementing thread synchronization, and building file decompression tools.</p>
              <p>When I'm not coding, you can find me playing music or learning the nuances of modern AI. I believe that diverse experiences contribute to creative problem-solving in development.</p>
              <div className="about-cta">
                <Link to="/contact" className="btn">Get In Touch</Link>
                <a href="/files/Andrew_Ochs_Resume.pdf" className="btn btn-outline" download>Download Resume</a>
              </div>
            </div>
          </div>
          
          <div className="about-timeline">
            <h3>My Journey</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>2024 - Present</h4>
                  <h5>Aspiring Software Developer | Career Transition</h5>
                  <p>Actively pursuing a career in software development following graduation. Developing expertise in full-stack web technologies, with a focus on building robust and innovative web applications. 
                    <br></br><br></br>
                    Continuously expanding technical skills through personal projects, online courses, and hands-on learning in React, TypeScript, and modern web development practices. Committed to creating efficient, user-friendly software solutions and growing as a professional in the tech industry.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>2023 - Present</h4>
                  <h5>Web Development</h5>
                  <p>Developed a comprehensive informational website for the Tremont Borough, PA; creating an accessible, user-friendly platform to enhance community digital resources. 
                    <br></br><br></br>
                    Designed and implemented a modern web solution using React, HTML, CSS, and JavaScript. Focused on improving community communication and digital accessibility.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>2020 - 2025</h4>
                  <h5>Computer Science Degree</h5>
                  <p>Pursued Computer Science at Temple University, with a deep dive into web technologies and software development fundamentals. 
                    <br></br><br></br>
                    As the AI landscape began to transform, I dedicated my personal time to exploring cutting-edge AI and machine learning technologies, gaining hands-on experience during the emerging era of artificial intelligence.
                    </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skills-section">
            <h3>My Skills</h3>
            <div className="skills-container">
              <div className="skill-group">
                <h4>Languages</h4>
                <div className="skill-bars">
                  <div className="skill-bar">
                    <div className="skill-name">Python</div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-name">Java/JavaScript</div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-name">HTML & CSS</div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-name">C/C++</div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-group">
                <h4>Tools & Frameworks</h4>
                <div className="skill-bars">
                  <div className="skill-bar">
                    <div className="skill-name">React</div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-name">Git & Github</div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-name">SQL/MySQL</div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-name">AWS</div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;