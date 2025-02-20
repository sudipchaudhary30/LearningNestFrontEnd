import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css"; // Import styles
import Navbar from "../components/Navbar";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(""); // Clear error when switching
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const userData = { email, password };
    if (!isLogin) userData.name = name; // Add name only for signup

    try {
      const endpoint = isLogin ? "/auth/login" : "/auth/register";
      const response = await axios.post(`http://localhost:8000${endpoint}`, userData);

      if (isLogin) {
        localStorage.setItem("jwtToken", response.data.jwtToken); // Store token
        alert("Login successful!");

        // Role-based navigation
        if (response.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      } else {
        alert("Signup successful! Please login.");
        setIsLogin(true); // Switch to login after signup
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="form-container">
          <div className="form-toggle">
            <button
              className={`toggle-button ${isLogin ? "active" : ""}`}
              onClick={toggleForm}
              disabled={isLoading}
            >
              Login
            </button>
            <button
              className={`toggle-button ${!isLogin ? "active" : ""}`}
              onClick={toggleForm}
              disabled={isLoading}
            >
              Sign Up
            </button>
          </div>
          <form onSubmit={handleSubmit} className="auth-form">
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            {error && <div className="error-message">{error}</div>}

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
            </button>

            {isLogin && !isLoading && (
              <div className="forgot-password">
                <p>
                  <a href="/forgot-password">Forgot Password?</a>
                </p>
              </div>
            )}

            {/* Login as Admin link */}
            {isLogin && !isLoading && (
              <div className="admin-login">
                <p>Login as <a href="/adminlogin">Admin</a></p>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
