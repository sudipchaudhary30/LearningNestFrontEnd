import React from 'react';
import { FaCode, FaChartBar, FaPaintBrush, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Skills.css';

// Placeholder image for skills without images
import placeholderImage from '../assets/Images/education-image.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const SkillsData = [
  {
    category: 'Development',
    icon: <FaCode className="skill-icon" />,
    skills: [
      {
        title: 'Web Development',
        image: placeholderImage,
        description: 'Learn to build modern websites and web applications.',
        path: '/webdevelopment', // Path for navigation
      },
      {
        title: 'Mobile App Development',
        image: placeholderImage,
        description: 'Create cross-platform mobile apps with React Native or Flutter.',
      },
      {
        title: 'Backend Development',
        image: placeholderImage,
        description: 'Master server-side programming with Node.js, Django, or Spring Boot.',
      },
      {
        title: 'Frontend Development',
        image: placeholderImage,
        description: 'Build responsive and interactive user interfaces with React or Angular.',
      },
      {
        title: 'DevOps',
        image: placeholderImage,
        description: 'Learn CI/CD, Docker, Kubernetes, and cloud deployment.',
      },
      {
        title: 'Game Development',
        image: placeholderImage,
        description: 'Create games using Unity, Unreal Engine, or Godot.',
      },
    ],
  },
  {
    category: 'Data & AI',
    icon: <FaChartBar className="skill-icon" />,
    skills: [
      {
        title: 'Data Science',
        image: placeholderImage,
        description: 'Master data analysis, machine learning, and AI.',
      },
      {
        title: 'Artificial Intelligence',
        image: placeholderImage,
        description: 'Explore deep learning, NLP, and intelligent systems.',
      },
      {
        title: 'Big Data',
        image: placeholderImage,
        description: 'Work with Hadoop, Spark, and large-scale data processing.',
      },
      {
        title: 'Data Visualization',
        image: placeholderImage,
        description: 'Create stunning visualizations with tools like Tableau and D3.js.',
      },
      {
        title: 'Machine Learning',
        image: placeholderImage,
        description: 'Build predictive models using TensorFlow and Scikit-learn.',
      },
      {
        title: 'Natural Language Processing',
        image: placeholderImage,
        description: 'Learn text analysis, sentiment analysis, and chatbots.',
      },
    ],
  },
  {
    category: 'Design',
    icon: <FaPaintBrush className="skill-icon" />,
    skills: [
      {
        title: 'Graphic Design',
        image: placeholderImage,
        description: 'Create stunning visuals and professional designs.',
      },
      {
        title: 'UI/UX Design',
        image: placeholderImage,
        description: 'Design user-friendly interfaces and experiences.',
      },
      {
        title: 'Web Design',
        image: placeholderImage,
        description: 'Create beautiful and responsive websites.',
      },
      {
        title: 'Motion Graphics',
        image: placeholderImage,
        description: 'Design animations and motion graphics for videos.',
      },
      {
        title: 'Branding',
        image: placeholderImage,
        description: 'Develop brand identities and marketing materials.',
      },
      {
        title: '3D Design',
        image: placeholderImage,
        description: 'Create 3D models and animations using Blender or Maya.',
      },
    ],
  },
  {
    category: 'Security',
    icon: <FaShieldAlt className="skill-icon" />,
    skills: [
      {
        title: 'Cybersecurity',
        image: placeholderImage,
        description: 'Learn how to protect systems and data from cyber threats.',
      },
      {
        title: 'Ethical Hacking',
        image: placeholderImage,
        description: 'Master penetration testing and vulnerability assessment.',
      },
      {
        title: 'Network Security',
        image: placeholderImage,
        description: 'Secure networks and prevent unauthorized access.',
      },
      {
        title: 'Cloud Security',
        image: placeholderImage,
        description: 'Protect cloud infrastructure and applications.',
      },
      {
        title: 'Cryptography',
        image: placeholderImage,
        description: 'Learn encryption techniques and secure communication.',
      },
      {
        title: 'Digital Forensics',
        image: placeholderImage,
        description: 'Investigate cybercrimes and recover digital evidence.',
      },
    ],
  },
];

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className="skill-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="skill-image-wrapper">
        <img
          src={skill.image || placeholderImage}
          alt={skill.title}
          className="skill-image"
        />
      </div>
      <div className="skill-content">
        <h3 className="skill-title">{skill.title}</h3>
        <p className="skill-description">{skill.description}</p>
        {/* Use Link for navigation */}
        <Link to={skill.path || '#'} className="skill-button">
          Start Learning
        </Link>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
     <Navbar />
    <section className="skills-page">
      <div className="skills-container">
        <h2 className="skills-title">Explore Skills</h2>
        {SkillsData.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="category-header">
              {category.icon}
              <h3 className="category-title">{category.category}</h3>
            </div>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <SkillCard key={skillIndex} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Skills;
