import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    { name: 'Alice Johnson', quote: 'LearningNest helped me find amazing mentors who guided me step-by-step in my learning journey. Highly recommended!', role: 'Software Engineer' },
    { name: 'Bob Smith', quote: 'I learned Python in just 3 months with the help of expert mentors. The platform is intuitive and effective.', role: 'Data Scientist' },
    { name: 'Charlie Brown', quote: 'The personalized learning approach made all the difference. I achieved my goals faster than I expected.', role: 'Graphic Designer' },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Users Say</h2>
        <p className="section-subtitle">Hear from our community of learners and mentors.</p>
        <div className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;