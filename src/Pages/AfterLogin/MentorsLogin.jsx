import React from 'react';
import { FaCode, FaChartBar, FaPaintBrush, FaShieldAlt, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../Mentors.css';

// Placeholder image for mentors without images
import placeholderImage from '../../assets/Images/mentor-image.jpg';

import Jane from '../../assets/Images/one.jpeg';
import Mentor3 from '../../assets/Images/Mentor/Mentor3.jpg';
import Mentor4 from '../../assets/Images/Mentor/Mentor4.jpg';
import Mentor5 from '../../assets/Images/Mentor/Mentor5.jpg';
import Mentor6 from '../../assets/Images/Mentor/Mentor6.webp';
import Mentor7 from '../../assets/Images/Mentor/Mentor7.webp';
import Mentor8 from '../../assets/Images/Mentor/Mentor8.jpg';
import Mentor9 from '../../assets/Images/Mentor/Mentor9.jpg';
import Mentor10 from '../../assets/Images/Mentor/Mentor10.jpg';
import Mentor11 from '../../assets/Images/Mentor/Mentor11.jpg';
import Mentor12 from '../../assets/Images/Mentor/Mentor12.jpeg';


import Footer from '../../components/Footer';
import NavbarSec from '../../components/NavbarSec';

export const MentorsData = [
  {
    category: 'Development',
    icon: <FaCode className="mentor-icon" />,
    mentors: [
      {
        name: 'Joe Doe',
        image: placeholderImage,
        expertise: 'Web Development',
        description: '10+ years of experience in building modern websites and web applications.',
      },
      {
        name: 'Jane Smith',
        image: Jane,
        expertise: 'Mobile App Development',
        description: 'Expert in creating cross-platform mobile apps with React Native and Flutter.',
      },
      {
        name: 'Alice Johnson',
        image: Mentor3,
        expertise: 'Backend Development',
        description: 'Specializes in server-side programming with Node.js and Django.',
      },
    ],
  },
  {
    category: 'Data & AI',
    icon: <FaChartBar className="mentor-icon" />,
    mentors: [
      {
        name: 'Bob Brown',
        image: Mentor4,
        expertise: 'Data Science',
        description: 'Master in data analysis, machine learning, and AI.',
      },
      {
        name: 'Charlie Davis',
        image: Mentor5,
        expertise: 'Artificial Intelligence',
        description: 'Expert in deep learning, NLP, and intelligent systems.',
      },
      {
        name: 'Eve White',
        image: Mentor6,
        expertise: 'Big Data',
        description: 'Experienced in Hadoop, Spark, and large-scale data processing.',
      },
    ],
  },
  {
    category: 'Design',
    icon: <FaPaintBrush className="mentor-icon" />,
    mentors: [
      {
        name: 'Frank Green',
        image: Mentor7,
        expertise: 'Graphic Design',
        description: 'Creates stunning visuals and professional designs.',
      },
      {
        name: 'Grace Hall',
        image: Mentor8,
        expertise: 'UI/UX Design',
        description: 'Designs user-friendly interfaces and experiences.',
      },
      {
        name: 'Hank Hill',
        image: Mentor9,
        expertise: 'Web Design',
        description: 'Creates beautiful and responsive websites.',
      },
    ],
  },
  {
    category: 'Security',
    icon: <FaShieldAlt className="mentor-icon" />,
    mentors: [
      {
        name: 'Ivy King',
        image: Mentor10,
        expertise: 'Cybersecurity',
        description: 'Expert in protecting systems and data from cyber threats.',
      },
      {
        name: 'Jack Lee',
        image: Mentor11,
        expertise: 'Ethical Hacking',
        description: 'Master in penetration testing and vulnerability assessment.',
      },
      {
        name: 'Karen Moore',
        image: Mentor12,
        expertise: 'Network Security',
        description: 'Secures networks and prevents unauthorized access.',
      },
    ],
  },
];

const MentorCard = ({ mentor }) => {
  return (
    <motion.div
      className="mentor-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="mentor-image-wrapper">
        <img
          src={mentor.image || placeholderImage}
          alt={mentor.name}
          className="mentor-image"
        />
      </div>
      <div className="mentor-content">
        <h3 className="mentor-name">{mentor.name}</h3>
        <p className="mentor-expertise">{mentor.expertise}</p>
        <p className="mentor-description">{mentor.description}</p>
        <div className="mentor-contact-container">
          <button className="mentor-button">Contact Mentor</button>
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MentorsLogin = () => {
  return (
    <>
      <NavbarSec />
      <section className="mentors-page">
        <div className="mentors-container">
          <h2 className="mentors-title">Meet Our Mentors</h2>
          {MentorsData.map((category, index) => (
            <motion.div
              key={index}
              className="category-container"
              initial={{ opacity: 10, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                {category.icon}
                <h3 className="category-title">{category.category}</h3>
              </div>
              <div className="mentors-grid">
                {category.mentors.map((mentor, mentorIndex) => (
                  <MentorCard key={mentorIndex} mentor={mentor} />
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

export default MentorsLogin;
