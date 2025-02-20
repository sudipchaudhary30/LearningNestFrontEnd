import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css"; // Import styles
import Navbar from "../components/Navbar";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      const response = await fakeLoginApi(email, password);

      if (response.success) {
        localStorage.setItem("token", response.token); // Store token in localStorage
        navigate("/admin"); // Navigate to the admin dashboard
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Simulate a fake login API
  const fakeLoginApi = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "admin@example.com" && password === "password123") {
          resolve({ success: true, token: "fake-jwt-token" }); // Simulate token
        } else {
          resolve({ success: false });
        }
      }, 1000); // Simulate network delay
    });
  };

  return (
    <>
    <Navbar />
    <div className="auth-page">
      <div className="form-container">
        <h2>Admin Login</h2>
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
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
              autoComplete="email"
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
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? "Loading..." : "Login as Admin"}
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AdminLogin;