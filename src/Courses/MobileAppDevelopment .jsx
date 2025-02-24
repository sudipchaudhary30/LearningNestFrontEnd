import React from "react";
import { useNavigate } from "react-router-dom";
import mobileImage from '../assets/Images/mobile.png';

import './course.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavbarSec from "../components/NavbarSec";

const BackButton = () => {
  const navigate = useNavigate();
  return <button className="back-button" onClick={() => navigate(-1)}>⬅ Back</button>;
};

const EnrollButton = () => {
  return <button className="enroll-button" onClick={() => window.location.href = "/enroll"}>Enroll Now</button>;
};

const ImageGallery = () => {
  const images = [mobileImage];

  return (
    <div className="image-gallery-container">
      <h2>Technologies Covered</h2>
      <div className="image-gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Mobile App Topic ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

const CourseInclusions = () => {
  return (
    <div className="course-inclusions">
      <h3>Mobile App Development Course Includes:</h3>
      <ul>
        <li>Comprehensive Android and iOS App Development</li>
        <li>React Native and Flutter for Cross-Platform Development</li>
        <li>Backend Integration with Firebase and REST APIs</li>
        <li>Project-Based Learning with Real-World Applications</li>
        <li>Mentorship from Industry Experts</li>
        <li>Certification Upon Completion</li>
      </ul>
    </div>
  );
};

const MobileAppDevelopmentCourse = () => {
  return (
    <>
      <NavbarSec />
      <div className="container">
        <div className="button-container">
          <BackButton />
          <h1 className="head">Mobile App Development Mastery Course</h1>
        </div>

        <div className="description">
          <h2>Learn to Build Modern Mobile Applications</h2>
          <p>
            This Mobile App Development Course equips learners with the skills to create powerful and dynamic mobile applications
            using React Native, Flutter, and native technologies. Gain hands-on experience through real-world projects and build a strong portfolio.
          </p>
        </div>

        <ImageGallery />
        <CourseInclusions />
      </div>
      <Footer />
    </>
  );
};

export default MobileAppDevelopmentCourse;
