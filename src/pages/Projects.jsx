import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', ...new Set(projects.flatMap(project => project.category))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-header">
        <div className="container">
          <h1>My Projects</h1>
        </div>
      </div>
      
      <section className="section projects-section">
        <div className="container">
          <div className="projects-filter">
            {categories.map(category => (
              <button 
                key={category} 
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;