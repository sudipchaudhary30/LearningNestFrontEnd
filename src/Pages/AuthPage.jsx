import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.css'; // Optional: Add styles for this page

const AuthPage = () => {
  return (
    <div className="auth-page">
      <h1>Welcome to LearningNest</h1>
      <p>Choose your role to get started:</p>

      <div className="auth-options">
        <div className="auth-option">
          <h2>Mentor</h2>
          <Link to="/mentor-signup" className="auth-button">Sign Up as Mentor</Link>
          <Link to="/mentor-login" className="auth-button">Log In as Mentor</Link>
        </div>

        <div className="auth-option">
          <h2>Student</h2>
          <Link to="/student-signup" className="auth-button">Sign Up as Student</Link>
          <Link to="/student-login" className="auth-button">Log In as Student</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;