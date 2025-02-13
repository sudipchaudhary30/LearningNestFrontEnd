import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './HeroSection.css'; // Import CSS for styling

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStarted = () => {
    navigate('/auth'); // Navigate to AuthPage when the button is clicked
  };

  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover, Learn, and Connect
        </motion.h1>
        <motion.p
          className="subheading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Unlock your potential with LearningNest—find skills, mentors, and communities that inspire growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button className="cta-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </motion.div>
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="stat">
            <h2>10,000+</h2>
            <p>Skills to Explore</p>
          </div>
          <div className="stat">
            <h2>5,000+</h2>
            <p>Mentors Available</p>
          </div>
          <div className="stat">
            <h2>100+</h2>
            <p>Active Communities</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;