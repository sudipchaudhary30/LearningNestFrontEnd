import React, { useState } from 'react';
import './ManageMentor.css'; // Create this CSS file for styling
import Sidebar from '../components/Sidebar';

const ManageMentor = () => {
  const [mentors, setMentors] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [linkedin, setLinkedin] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add or update mentor
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId !== null) {
      // Update existing mentor
      const updatedMentors = mentors.map((mentor) =>
        mentor.id === editingId
          ? {
              ...mentor,
              name,
              category,
              image,
              linkedin,
              facebook,
              twitter,
            }
          : mentor
      );
      setMentors(updatedMentors);
      setEditingId(null);
    } else {
      // Add new mentor
      const newMentor = {
        id: Date.now(),
        name,
        category,
        image,
        linkedin,
        facebook,
        twitter,
      };
      setMentors([...mentors, newMentor]);
    }
    // Reset form fields
    setName('');
    setCategory('');
    setImage(null);
    setLinkedin('');
    setFacebook('');
    setTwitter('');
  };

  // Edit mentor
  const handleEdit = (id) => {
    const mentorToEdit = mentors.find((mentor) => mentor.id === id);
    if (mentorToEdit) {
      setName(mentorToEdit.name);
      setCategory(mentorToEdit.category);
      setImage(mentorToEdit.image);
      setLinkedin(mentorToEdit.linkedin);
      setFacebook(mentorToEdit.facebook);
      setTwitter(mentorToEdit.twitter);
      setEditingId(id);
    }
  };

  // Delete mentor
  const handleDelete = (id) => {
    const updatedMentors = mentors.filter((mentor) => mentor.id !== id);
    setMentors(updatedMentors);
  };

  return (
    <>
      <Sidebar />
      <div className="manage-mentor-container">
        <h1>Manage Mentors</h1>
        <form onSubmit={handleSubmit} className="mentor-form">
          <div className="form-group">
            <label htmlFor="name">Mentor Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter mentor's name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageUpload}
              required={editingId === null}
            />
            {image && (
              <img src={image} alt="Preview" className="image-preview" />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn Profile</label>
            <input
              type="url"
              id="linkedin"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              placeholder="Enter LinkedIn URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="facebook">Facebook Profile</label>
            <input
              type="url"
              id="facebook"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              placeholder="Enter Facebook URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter Profile</label>
            <input
              type="url"
              id="twitter"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              placeholder="Enter Twitter URL"
            />
          </div>
          <button type="submit" className="submit-button">
            {editingId !== null ? 'Update Mentor' : 'Add Mentor'}
          </button>
        </form>

        <div className="mentors-list">
          <h2>Mentors</h2>
          {mentors.length === 0 ? (
            <p>No mentors added yet.</p>
          ) : (
            mentors.map((mentor) => (
              <div key={mentor.id} className="mentor-card">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="mentor-image"
                />
                <div className="mentor-details">
                  <h3>{mentor.name}</h3>
                  <p>{mentor.category}</p>
                  <div className="social-links">
                    {mentor.linkedin && (
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    )}
                    {mentor.facebook && (
                      <a
                        href={mentor.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    )}
                    {mentor.twitter && (
                      <a
                        href={mentor.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    )}
                  </div>
                </div>
                <div className="mentor-actions">
                  <button onClick={() => handleEdit(mentor.id)}>Edit</button>
                  <button onClick={() => handleDelete(mentor.id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ManageMentor;