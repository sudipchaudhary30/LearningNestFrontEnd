import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.css'; // Import CSS for styling

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Welcome to LearningNest</h1>
        <p>Unlock your potential by joining as a Mentor or Student.</p>

        {/* Toggle between Login and Signup */}
        <div className="auth-toggle">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Log In
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Form for Login or Signup */}
        <form className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select id="role" required>
                <option value="">Select your role</option>
                <option value="mentor">Mentor</option>
                <option value="student">Student</option>
              </select>
            </div>
          )}
          <button type="submit" className="auth-submit-button">
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        {/* Additional Links */}
        <div className="auth-links">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <span onClick={() => setIsLogin(false)}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span onClick={() => setIsLogin(true)}>Log In</span>
            </p>
          )}
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;