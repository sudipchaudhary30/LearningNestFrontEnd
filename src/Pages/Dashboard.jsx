import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './Dashboard.css'; // Add CSS for styling

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('home'); // State to manage active section

  // Function to render the active section
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="dashboard-section">
            <h1>Welcome to Your Dashboard</h1>
            <p>Here you can manage your courses, track progress, and connect with mentors.</p>
          </div>
        );
      case 'courses':
        return (
          <div className="dashboard-section">
            <h1>Your Courses</h1>
            <p>Explore and manage your enrolled courses.</p>
          </div>
        );
      case 'progress':
        return (
          <div className="dashboard-section">
            <h1>Your Progress</h1>
            <p>Track your learning progress and achievements.</p>
          </div>
        );
      case 'mentors':
        return (
          <div className="dashboard-section">
            <h1>Mentors</h1>
            <p>Connect with mentors to guide your learning journey.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="dashboard-section">
            <h1>Settings</h1>
            <p>Update your profile and preferences.</p>
          </div>
        );
      default:
        return (
          <div className="dashboard-section">
            <h1>Welcome to Your Dashboard</h1>
            <p>Here you can manage your courses, track progress, and connect with mentors.</p>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar setActiveSection={setActiveSection} />

      {/* Main Content Area */}
      <div className="dashboard-content">
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;