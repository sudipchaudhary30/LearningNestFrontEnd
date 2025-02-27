// src/Pages/tests/LearningNest.test.jsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LearningNest from "../LearningNest";

// Mock ReactQuill
jest.mock("react-quill", () => ({
  __esModule: true,
  default: ({ value, onChange }) => (
    <textarea
      data-testid="quill-editor"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
}));

describe("LearningNest Component", () => {
  // Helper function to render the component with Router
  const renderLearningNest = () => {
    return render(
      <Router>
        <LearningNest />
      </Router>
    );
  };

  // Test 1: Renders the LearningNest component
  it("renders the LearningNest component", () => {
    renderLearningNest();
    expect(screen.getByText(/Create Learning Content/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Add an Image/i)).toBeInTheDocument();
    expect(screen.getByTestId("quill-editor")).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  // Test 2: Handles title input
  it("handles title input", () => {
    renderLearningNest();
    const titleInput = screen.getByPlaceholderText(/Title/i);
    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    expect(titleInput.value).toBe("Test Title");
  });

  // Test 3: Handles image upload and preview
  it("handles image upload and preview", () => {
    renderLearningNest();
    const file = new File(["test"], "test.png", { type: "image/png" });
    const fileInput = screen.getByLabelText(/Add an Image/i);

    fireEvent.change(fileInput, { target: { files: [file] } });

    const previewImage = screen.getByAltText(/Preview/i);
    expect(previewImage).toBeInTheDocument();
    expect(previewImage.src).toContain("blob:");
  });

  // Test 4: Handles Quill editor content
  it("handles Quill editor content", () => {
    renderLearningNest();
    const quillEditor = screen.getByTestId("quill-editor");
    fireEvent.change(quillEditor, { target: { value: "Test Content" } });
    expect(quillEditor.value).toBe("Test Content");
  });

  // Test 5: Handles form submission
  it("handles form submission", async () => {
    // Mock fetch
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: "Learning content created successfully!" }),
      })
    );

    renderLearningNest();

    // Fill in the form
    const titleInput = screen.getByPlaceholderText(/Title/i);
    fireEvent.change(titleInput, { target: { value: "Test Title" } });

    const quillEditor = screen.getByTestId("quill-editor");
    fireEvent.change(quillEditor, { target: { value: "Test Content" } });

    const file = new File(["test"], "test.png", { type: "image/png" });
    const fileInput = screen.getByLabelText(/Add an Image/i);
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Submit the form
    const submitButton = screen.getByText(/Submit/i);
    fireEvent.click(submitButton);

    // Wait for the submission process to complete
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("http://localhost:8000/learning", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: expect.any(FormData),
      });
    });
  });
});