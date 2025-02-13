import React from 'react';
import { FaCode, FaChartBar, FaPaintBrush, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Mentors.css';

// Placeholder image for mentors without images
import placeholderImage from '../assets/Images/mentor-image.jpg';

export const MentorsData = [
  {
    category: 'Development',
    icon: <FaCode className="mentor-icon" />,
    mentors: [
      {
        name: 'John Doe',
        image: placeholderImage,
        expertise: 'Web Development',
        description: '10+ years of experience in building modern websites and web applications.',
      },
      {
        name: 'Jane Smith',
        image: placeholderImage,
        expertise: 'Mobile App Development',
        description: 'Expert in creating cross-platform mobile apps with React Native and Flutter.',
      },
      {
        name: 'Alice Johnson',
        image: placeholderImage,
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
        image: placeholderImage,
        expertise: 'Data Science',
        description: 'Master in data analysis, machine learning, and AI.',
      },
      {
        name: 'Charlie Davis',
        image: placeholderImage,
        expertise: 'Artificial Intelligence',
        description: 'Expert in deep learning, NLP, and intelligent systems.',
      },
      {
        name: 'Eve White',
        image: placeholderImage,
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
        image: placeholderImage,
        expertise: 'Graphic Design',
        description: 'Creates stunning visuals and professional designs.',
      },
      {
        name: 'Grace Hall',
        image: placeholderImage,
        expertise: 'UI/UX Design',
        description: 'Designs user-friendly interfaces and experiences.',
      },
      {
        name: 'Hank Hill',
        image: placeholderImage,
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
        image: placeholderImage,
        expertise: 'Cybersecurity',
        description: 'Expert in protecting systems and data from cyber threats.',
      },
      {
        name: 'Jack Lee',
        image: placeholderImage,
        expertise: 'Ethical Hacking',
        description: 'Master in penetration testing and vulnerability assessment.',
      },
      {
        name: 'Karen Moore',
        image: placeholderImage,
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
        <button className="mentor-button">Contact Mentor</button>
      </div>
    </motion.div>
  );
};

const Mentors = () => {
  return (
    <section className="mentors-page">
      <div className="mentors-container">
        <h2 className="mentors-title">Meet Our Mentors</h2>
        {MentorsData.map((category, index) => (
          <motion.div
            key={index}
            className="category-container"
            initial={{ opacity: 0, y: 50 }}
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
  );
};

export default Mentors;