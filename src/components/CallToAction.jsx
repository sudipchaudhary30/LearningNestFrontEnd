import React from "react";
import { useNavigate } from "react-router-dom";
import "./CallToAction.css";

const CallToAction = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <section className="cta-section">
      <div className="cta-overlay"></div> {/* Overlay for gradient effect */}
      <div className="cta-content">
        <h2 className="cta-title">Start Your Learning Journey Today!</h2>
        <p className="cta-subtitle">It’s free, easy, and inspiring.</p>
        <button className="cta-button" onClick={() => navigate("/auth")}>
          Sign Up Now
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
