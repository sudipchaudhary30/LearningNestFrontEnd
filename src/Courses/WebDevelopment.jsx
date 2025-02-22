import React from "react"; 
import { useNavigate } from "react-router-dom";
import htmlImage from '../assets/Images/html.jpg';
import cssImage from '../assets/Images/css.jpg';
import jsImage from '../assets/Images/javascript.png';
import reactImage from '../assets/Images/react.jpg';
import nodeImage from '../assets/Images/nodejs.jpg';
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
  const images = [htmlImage, cssImage, jsImage, reactImage, nodeImage];

  return (
    <div className="image-gallery-container">
      <h2>Technologies Covered</h2>
      <div className="image-gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Web Dev Topic ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

const CourseInclusions = () => {
  return (
  
    <div className="course-inclusions">
      <h3>Web Development Course Includes:</h3>
      <ul>
        <li>Comprehensive HTML, CSS, and JavaScript Training</li>
        <li>React.js and Node.js for Modern Web Applications</li>
        <li>Backend Development with Express and MongoDB</li>
        <li>Project-Based Learning with Real-World Applications</li>
        <li>Mentorship from Industry Experts</li>
        <li>Certification Upon Completion</li>
      </ul>
    </div>
  );
};

const WebDevelopmentCourse = () => {
  return (
    <>
    <NavbarSec />
    <div className="container">
      <div className="button-container">
        <BackButton />
        <h1 className="head">Web Development Mastery Course</h1>
        
      </div>

      <div className="description">
        <h2>Learn to Build Modern Web Applications</h2>
        <p>
          This Web Development Course equips learners with the skills to create dynamic and responsive websites
          using HTML, CSS, JavaScript, and modern frameworks like React.js and Node.js. Gain hands-on experience
          through real-world projects and build a strong portfolio.
        </p>
      </div>

      <ImageGallery />
      <CourseInclusions />
    </div>
    <Footer />
    </>
  );
};

export default WebDevelopmentCourse;
