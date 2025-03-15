import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // This is where you would normally submit the form data to a server
    // For this example, we'll simulate a successful submission
    
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-header">
        <div className="container">
          <h1>Contact Me</h1>
        </div>
      </div>
      
      <section className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>I'm always open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to say hello!</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-details">
                    <h3>Email</h3>
                    <p><a href="mailto:your-email@example.com">aochs1021@gmail.com</a></p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">📱</div>
                  <div className="method-details">
                    <h3>Phone</h3>
                    <p><a href="tel:+1234567890">+1 (570) 640-2237</a></p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-details">
                    <h3>Location</h3>
                    <p>Philadelphia, PA</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Connect With Me</h3>
                <div className="social-icons">
                  <a href="https://github.com/AndrewOchs" target="_blank" rel="noreferrer">GitHub</a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>Send Me a Message</h2>
              
              {formStatus.submitted && formStatus.success && (
                <div className="form-success">
                  <p>{formStatus.message}</p>
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;