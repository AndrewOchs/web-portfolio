import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  
  useEffect(() => {
    const foundProject = projects.find(p => p.id === id);
    setProject(foundProject);
    
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!project) {
    return (
      <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
        <h2>Project not found</h2>
        <Link to="/projects" className="btn" style={{ marginTop: '30px' }}>Back to Projects</Link>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-detail-header" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="container">
          <h1>{project.title}</h1>
        </div>
      </div>
      
      <section className="section project-detail-section">
        <div className="container">
          <div className="project-overview">
            <div className="project-overview-content">
              <h2>Project Overview</h2>
              <p>{project.description}</p>
              <p>{project.longDescription}</p>
            </div>
            <div className="project-overview-info">
              <div className="info-item">
                <h3>Client</h3>
                <p>{project.client || 'Personal Project'}</p>
              </div>
              <div className="info-item">
                <h3>Date</h3>
                <p>{project.date}</p>
              </div>
              <div className="info-item">
                <h3>Category</h3>
                <p>{project.category.join(', ')}</p>
              </div>
              <div className="info-item">
                <h3>Technologies</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} className="btn" target="_blank" rel="noreferrer">Live Demo</a>
                )}
                {project.codeLink && (
                  <a href={project.codeLink} className="btn btn-outline" target="_blank" rel="noreferrer">View Code</a>
                )}
              </div>
            </div>
          </div>
          
          <div className="project-details">
            <h2>Project Details</h2>
            <div className="project-details-content">
              <div className="details-text">
                <h3>The Challenge</h3>
                <p>{project.challenge}</p>
                
                <h3>The Solution</h3>
                <p>{project.solution}</p>
                
                <h3>Key Features</h3>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="details-image">
                <img src={project.detailImage || project.image} alt={project.title} />
              </div>
            </div>
          </div>
          
          <div className="project-navigation">
            <Link to="/projects" className="btn">Back to Projects</Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;