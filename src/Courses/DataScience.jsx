import React from "react";
import { useNavigate } from "react-router-dom";
import dataScienceImage from '../assets/Images/Data.jpg';

import './course.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const BackButton = () => {
  const navigate = useNavigate();
  return <button className="back-button" onClick={() => navigate(-1)}>⬅ Back</button>;
};

const EnrollButton = () => {
  return <button className="enroll-button" onClick={() => window.location.href = "/enroll"}>Enroll Now</button>;
};

const ImageGallery = () => {
  const images = [dataScienceImage];

  return (
    <div className="image-gallery-container">
      <h2>Technologies Covered</h2>
      <div className="image-gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Data Science Topic ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

const CourseInclusions = () => {
  return (
    <div className="course-inclusions">
      <h3>Data Science Course Includes:</h3>
      <ul>
        <li>Comprehensive Data Science Curriculum</li>
        <li>Hands-On Projects in Python, R, and SQL</li>
        <li>Machine Learning, Deep Learning, and AI Concepts</li>
        <li>Data Visualization with Tools like Tableau and Matplotlib</li>
        <li>End-to-End Data Analysis Pipeline</li>
        <li>Mentorship from Experienced Data Scientists</li>
        <li>Certification Upon Completion</li>
      </ul>
    </div>
  );
};

const DataScienceCourse = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="button-container">
          <BackButton />
          <h1 className="head">Data Science Mastery Course</h1>
        </div>

        <div className="description">
          <h2>Become a Data Science Expert</h2>
          <p>
            This Data Science Course equips you with the knowledge and skills to analyze and interpret complex data, build machine learning models, and derive actionable insights. Learn data wrangling, visualization, and machine learning algorithms through hands-on projects.
          </p>
        </div>

        <ImageGallery />
        <CourseInclusions />
      </div>
      <Footer />
    </>
  );
};

export default DataScienceCourse;
