import React, { useState } from "react";
import NavbarSec from "../components/NavbarSec";
import profilePicture from "../assets/Images/profile.jpeg";
import { FiEdit, FiLogOut, FiUpload } from "react-icons/fi";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [name, setName] = useState("Sudip Chaudhary");
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    window.location.href = "/";
  };

  return (
    <>
      <NavbarSec />
      <div className="profile-page">
        <div className="profile-container">
          <h1 className="profile-title">My Profile</h1>
          <div className="profile-image-container">
            <img
              src={profileImage || profilePicture}
              alt="Profile"
              className="profile-image"
            />
            <label htmlFor="profile-image-upload" className="upload-label">
              <FiUpload className="upload-icon" /> Upload Photo
            </label>
            <input
              type="file"
              id="profile-image-upload"
              accept="image/*"
              onChange={handleImageUpload}
              hidden
            />
          </div>
          <div className="profile-details">
            {isEditing ? (
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="name-input"
              />
            ) : (
              <h2 className="profile-name">{name}</h2>
            )}
            <button onClick={toggleEditMode} className="edit-button">
              <FiEdit className="edit-icon" /> {isEditing ? "Save" : "Edit Name"}
            </button>
          </div>
          <button onClick={handleLogout} className="logout-button">
            <FiLogOut className="logout-icon" /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
