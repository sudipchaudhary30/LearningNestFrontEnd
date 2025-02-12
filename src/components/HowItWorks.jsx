// components/HowItWorks.jsx
import React from 'react';
import { FaSearch, FaHandshake, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    { icon: <FaSearch />, title: 'Search', description: 'Explore skills or mentors tailored to your interests.' },
    { icon: <FaHandshake />, title: 'Connect', description: 'Engage with experts and like-minded learners.' },
    { icon: <FaChartLine />, title: 'Grow', description: 'Join communities and track your progress.' },
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="step"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;