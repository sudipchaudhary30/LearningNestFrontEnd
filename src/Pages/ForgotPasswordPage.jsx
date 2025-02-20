import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css"; // Reuse the same styles
import Navbar from "../components/Navbar";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.post("http://localhost:8000/auth/forgot-password", {
        email,
        newPassword,
      });

      if (response.status === 200) {
        setSuccessMessage("Password updated successfully! You can now login with your new password.");
        setTimeout(() => {
          navigate("/login"); // Redirect to login page after success
        }, 3000);
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="auth-page">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Forgot Password</h2>
          {error && <div className="error-message">{error}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              id="newPassword"
              type="password"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Password"}
          </button>

          <div className="back-to-login">
            <p>
              <a href="/auth">Back to Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ForgotPassword;