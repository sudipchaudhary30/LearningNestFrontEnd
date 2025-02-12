// components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    { name: 'Alice', quote: 'LearningNest helped me find amazing mentors!' },
    { name: 'Bob', quote: 'I learned Python in just 3 months!' },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-carousel">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p>"{testimonial.quote}"</p>
            <h3>- {testimonial.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;