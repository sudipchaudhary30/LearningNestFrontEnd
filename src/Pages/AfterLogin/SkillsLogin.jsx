import React from 'react';
import { FaCode, FaChartBar, FaPaintBrush, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './SkillsLog.css';

// Placeholder image for skills with images
// import placeholderImage from '../assets/Images/education-image.png';
import placeholderImage from '../../assets/Images/education-image.png'
import webdeveloper from '../../assets/Images/Skills/webdevelopment.png';

import mobileapp from '../../assets/Images/Skills/mobileappdevelopment.png';
import Backend from '../../assets/Images/Skills/Backend-Development.webp';
import DevOps from '../../assets/Images/Skills/DevOps.png';
import Frontend from '../../assets/Images/Skills/frontend.png';
import game from '../../assets/Images/Skills/game.jpg';
import dataai from '../../assets/Images/Skills/DataScience.jpg';
import Artificial from '../../assets/Images/Skills/ArtificialIntelligence.webp';
import BigData from '../../assets/Images/Skills/BigData.jpg';
import DataVisualization from '../../assets/Images/Skills/DataVisualization.jpg';
import MachineLearning from '../../assets/Images/Skills/MachineLearning.jpg';
import NaturalLanguageProcessing from '../../assets/Images/Skills/NaturalLanguageProcessing.png';
import Graphic from '../../assets/Images/Skills/GraphicDesign.webp';
import UI from '../../assets/Images/Skills/UIUXDesign.png';
import Web from '../../assets/Images/Skills/WebDesign.webp';
import Motion from '../../assets/Images/Skills/MachineLearning.jpg';
import Branding from '../../assets/Images/Skills/Branding.jpeg';
import D from '../../assets/Images/Skills/3DDesign.webp';
import Cybersecurity from '../../assets/Images/Skills/Cybersecurity.jpg';
import Ethical  from '../../assets/Images/Skills/EthicalHacking.webp';
import Network from '../../assets/Images/Skills/NetworkSecurity.webp';
import Cloud from '../../assets/Images/Skills/CloudSecurity.jpeg';
import Cryptography from '../../assets/Images/Skills/Cryptography.webp';
import Digital from '../../assets/Images/Skills/DigitalForensics.webp';

import Footer from '../../components/Footer';

import NavbarSec from '../../components/NavbarSec';

export const SkillsData = [
  {
    category: 'Development',
    icon: <FaCode className="skill-icon" />,
    skills: [
      {
        title: 'Web Development',
        image: webdeveloper,
        description: 'Learn to build modern websites and web applications.',
        path: '/webdevelopment', // Path for navigation
      },
      {
        title: 'Mobile App Development',
        image: mobileapp,
        description: 'Create cross-platform mobile apps with React Native or Flutter.',
      },
      {
        title: 'Backend Development',
        image: Backend,
        description: 'Master server-side programming with Node.js, Django, or Spring Boot.',
      },
      {
        title: 'Frontend Development',
        image: Frontend,
        description: 'Build responsive and interactive user interfaces with React or Angular.',
      },
      {
        title: 'DevOps',
        image: DevOps,
        description: 'Learn CI/CD, Docker, Kubernetes, and cloud deployment.',
      },
      {
        title: 'Game Development',
        image: game,
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
        image: dataai,
        description: 'Master data analysis, machine learning, and AI.',
      },
      {
        title: 'Artificial Intelligence',
        image: Artificial,
        description: 'Explore deep learning, NLP, and intelligent systems.',
      },
      {
        title: 'Big Data',
        image: BigData,
        description: 'Work with Hadoop, Spark, and large-scale data processing.',
      },
      {
        title: 'Data Visualization',
        image: DataVisualization,
        description: 'Create stunning visualizations with tools like Tableau and D3.js.',
      },
      {
        title: 'Machine Learning',
        image: MachineLearning,
        description: 'Build predictive models using TensorFlow and Scikit-learn.',
      },
      {
        title: 'Natural Language Processing',
        image: NaturalLanguageProcessing,
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
        image: Graphic,
        description: 'Create stunning visuals and professional designs.',
      },
      {
        title: 'UI/UX Design',
        image: UI,
        description: 'Design user-friendly interfaces and experiences.',
      },
      {
        title: 'Web Design',
        image: Web,
        description: 'Create beautiful and responsive websites.',
      },
      {
        title: 'Motion Graphics',
        image: Motion,
        description: 'Design animations and motion graphics for videos.',
      },
      {
        title: 'Branding',
        image: Branding,
        description: 'Develop brand identities and marketing materials.',
      },
      {
        title: '3D Design',
        image: D,
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
        image: Cybersecurity,
        description: 'Learn how to protect systems and data from cyber threats.',
      },
      {
        title: 'Ethical Hacking',
        image: Ethical,
        description: 'Master penetration testing and vulnerability assessment.',
      },
      {
        title: 'Network Security',
        image: Network,
        description: 'Secure networks and prevent unauthorized access.',
      },
      {
        title: 'Cloud Security',
        image: Cloud,
        description: 'Protect cloud infrastructure and applications.',
      },
      {
        title: 'Cryptography',
        image: Cryptography,
        description: 'Learn encryption techniques and secure communication.',
      },
      {
        title: 'Digital Forensics',
        image: Digital,
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

const SkillsLogin = () => {
  return (
    <>
     <NavbarSec />
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

export default SkillsLogin;
