import React from 'react';
import './FeaturedSkillsMentors.css'; // Import CSS for styling

const FeaturedSkillsMentors = () => {
  const skills = [
    {
      title: 'Web Development',
      image: './src/assets/Images/image1.jpg',
      description: 'Learn to build modern websites and web applications.',
    },
    {
      title: 'Data Science',
      image: './src/assets/Images/image2.jpg',
      description: 'Master data analysis, machine learning, and AI.',
    },
    {
      title: 'Graphic Design',
      image: './src/assets/Images/image2.jpg',
      description: 'Create stunning visuals and designs.',
    },
  ];

  return (
    <section className="featured-skills">
      <h2 className="section-title">Featured Skills & Mentors</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.title} className="skill-image" />
            <div className="skill-content">
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
              <button className="skill-button">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSkillsMentors;