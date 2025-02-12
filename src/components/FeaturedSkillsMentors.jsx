// components/FeaturedSkillsMentors.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FeaturedSkillsMentors = () => {
  const skills = ['Python', 'Graphic Design', 'Photography', 'Data Science'];
  const mentors = [
    { name: 'John Doe', expertise: 'Python Expert', image: 'url-to-image' },
    { name: 'Jane Smith', expertise: 'Design Pro', image: 'url-to-image' },
  ];

  return (
    <section className="featured-section">
      <h2>Featured Skills & Mentors</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{skill}</h3>
            <button>Learn More</button>
          </motion.div>
        ))}
      </div>
      <div className="mentors-grid">
        {mentors.map((mentor, index) => (
          <motion.div
            key={index}
            className="mentor-card"
            whileHover={{ scale: 1.05 }}
          >
            <img src={mentor.image} alt={mentor.name} />
            <h3>{mentor.name}</h3>
            <p>{mentor.expertise}</p>
            <button>Connect</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSkillsMentors;