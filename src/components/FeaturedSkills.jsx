import React from 'react';
import './FeaturedSkills.css';

const FeaturedSkills = () => {
  const skills = [
    { name: 'Web Development', image: 'image1.jpg', path: '/skills/web-development' },
    { name: 'Data Science', image: 'data-science-thumbnail.jpg', path: '/skills/data-science' },
    { name: 'Graphic Design', image: 'graphic-design-thumbnail.jpg', path: '/skills/graphic-design' },
    { name: 'Machine Learning', image: 'machine-learning-thumbnail.jpg', path: '/skills/machine-learning' }
  ];

  return (
    <div className="featured-skills-container">
      <h2>Featured Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <a href={skill.path} className="skill-link">
              <img src={skill.image} alt={skill.name} className="skill-thumbnail" />
              <h3 className="skill-name">{skill.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSkills;
