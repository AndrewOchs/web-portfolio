import { motion } from 'framer-motion';
import React from 'react';
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
              <h2>Hi, I'm YourName</h2>
              <p className="lead">A passionate web developer based in [Your Location].</p>
              <p>I specialize in creating responsive websites and web applications that provide excellent user experiences. With a strong foundation in frontend development and a growing expertise in backend technologies, I enjoy building complete, end-to-end solutions.</p>
              <p>My journey into web development began in [year] when I [brief story about how you got into development]. Since then, I've worked on a variety of projects, continuously learning and improving my skills along the way.</p>
              <p>When I'm not coding, you can find me [your hobbies/interests]. I believe that diverse experiences contribute to creative problem-solving in development.</p>
              <div className="about-cta">
                <a href="/contact" className="btn">Get In Touch</a>
                <a href="/files/resume.pdf" className="btn btn-outline" download>Download Resume</a>
              </div>
            </div>
          </div>
          
          <div className="about-timeline">
            <h3>My Journey</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>2023 - Present</h4>
                  <h5>Frontend Developer at Company XYZ</h5>
                  <p>Working on enterprise web applications using React and TypeScript. Implementing responsive designs and improving user experience.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>2021 - 2023</h4>
                  <h5>Web Developer at Studio ABC</h5>
                  <p>Developed and maintained client websites using HTML, CSS, JavaScript, and WordPress. Collaborated with designers to implement pixel-perfect designs.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>2017 - 2021</h4>
                  <h5>Computer Science Degree</h5>
                  <p>Studied Computer Science at University Name, focusing on web technologies and software development.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skills-section">
            <h3>My Skills</h3>
            <div className="skills-container">
              <div className="skill-group">
                <h4>Frontend</h4>
                <div className="skill-bars">
                  <div className="skill-bar">
                    <div className="skill-name">HTML & CSS</div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-name">JavaScript</div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-name">React</div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-group">
                <h4>Backend</h4>
                <div className="skill-bars">
                  <div className="skill-bar">
                    <div className="skill-name">Node.js</div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-name">Express</div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-name">MongoDB</div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: '65%' }}></div>
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