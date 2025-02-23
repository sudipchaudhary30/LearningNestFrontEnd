import React, { useState, useRef } from "react";
import "./CreatePost.css";

import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const cleanHtml = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Remove unnecessary attributes or elements
  doc.querySelectorAll("[data-list]").forEach((el) => {
    el.removeAttribute("data-list");
  });

  doc.querySelectorAll(".ql-ui").forEach((el) => {
    el.remove();
  });

  return doc.body.innerHTML;
};

function LearningNest() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(null); // For image preview
  const navigate = useNavigate();
  const quillRef = useRef(null); // Ref for Quill editor

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Create a preview URL
    }
  };

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content are required.");
      return;
    }

    const cleanedContent = cleanHtml(content);

    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("content", cleanedContent);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch("http://localhost:8000/learning", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.token}`, // If authentication is required
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert("Learning content created successfully!");
        navigate("/learning");
      } else {
        alert(`Error creating content: ${data.message}`);
      }
    } catch (error) {
      console.error("Error creating content:", error.message);
      alert("An error occurred while creating the content.");
    }
  };

  // Quill editor modules and formats
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <>
  
      <div className="LearningNest-Container">
        <h1>Create Learning Content</h1>

        {/* Title Input */}
        <input
          type="text"
          className="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* File Input with Custom Styling */}
        <div className="file-input-container">
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" className="preview-image" />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="image"
            id="file-input"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <label htmlFor="file-input" className="custom-file-button">
            Add an Image
          </label>
        </div>

        {/* Quill Editor */}
        <ReactQuill
          ref={quillRef}
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          placeholder="Write your content here..."
          className="quill-editor"
        />

        {/* Submit Button */}
        <div className="ButtonPosition">
          <button className="Submit-Button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default LearningNest;