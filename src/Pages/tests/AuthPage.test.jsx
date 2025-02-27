// src/Pages/tests/AuthPage.test.jsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthPage from "../AuthPage";
import axios from "axios";

// Mock axios
jest.mock("axios");

describe("AuthPage Component", () => {
  // Helper function to render the component with Router
  const renderAuthPage = () => {
    return render(
      <Router>
        <AuthPage />
      </Router>
    );
  };

  // Test 1: Renders the AuthPage component
  it("renders the AuthPage component", () => {
    renderAuthPage();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  });

  // Test 2: Toggles between Login and Sign Up forms
  it("toggles between Login and Sign Up forms", () => {
    renderAuthPage();

    // Initially, the Login form should be visible
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    // Click the Sign Up button
    fireEvent.click(screen.getByText(/Sign Up/i));

    // Now, the Sign Up form should be visible
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
  });

  // Test 3: Handles Login form submission
  it("handles Login form submission", async () => {
    renderAuthPage();

    // Mock a successful login response
    axios.post.mockResolvedValueOnce({
      data: {
        jwtToken: "mockToken",
        role: "user",
      },
    });

    // Fill in the Login form
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/Login/i));

    // Wait for the login process to complete
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:8000/auth/login",
        {
          email: "test@example.com",
          password: "password123",
        }
      );
    });
  });

  // Test 4: Handles Sign Up form submission
  it("handles Sign Up form submission", async () => {
    renderAuthPage();

    // Switch to the Sign Up form
    fireEvent.click(screen.getByText(/Sign Up/i));

    // Mock a successful signup response
    axios.post.mockResolvedValueOnce({
      data: { message: "Signup successful! Please login." },
    });

    // Fill in the Sign Up form
    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/Sign Up/i));

    // Wait for the signup process to complete
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:8000/auth/register",
        {
          name: "John Doe",
          email: "test@example.com",
          password: "password123",
        }
      );
    });
  });

  // Test 5: Displays error messages on failed login/signup
  it("displays error messages on failed login/signup", async () => {
    renderAuthPage();

    // Mock a failed login response
    axios.post.mockRejectedValueOnce({
      response: { data: { message: "Invalid credentials" } },
    });

    // Fill in the Login form
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "wrongpassword" },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/Login/i));

    // Wait for the error message to appear
    await waitFor(() => {
      expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
    });
  });

  // Test 6: Disables buttons and inputs during loading
  it("disables buttons and inputs during loading", async () => {
    renderAuthPage();

    // Mock a delayed login response
    axios.post.mockImplementationOnce(
      () => new Promise((resolve) => setTimeout(resolve, 1000))
    );

    // Fill in the Login form
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/Login/i));

    // Check if buttons and inputs are disabled
    expect(screen.getByText(/Loading.../i)).toBeDisabled();
    expect(screen.getByLabelText(/Email/i)).toBeDisabled();
    expect(screen.getByLabelText(/Password/i)).toBeDisabled();
  });
});