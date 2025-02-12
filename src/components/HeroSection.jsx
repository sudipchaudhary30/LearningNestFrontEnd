import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css'; // Import CSS for styling

const HeroSection = () => {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Discover, Learn, and Connect</h1>
        <p className="subheading">
          Unlock your potential with LearningNest—find skills, mentors, and communities that inspire growth.
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Find skills or mentors" />
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-stats">
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
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;