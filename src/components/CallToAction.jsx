import React from 'react';
import './CallToAction.css'; // Import the CSS file for styling

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Start Your Learning Journey Today!</h2>
        <p className="cta-subtitle">It’s free, easy, and inspiring.</p>
        <button className="cta-button">Sign Up Now</button>
      </div>
    </section>
  );
};

export default CallToAction;