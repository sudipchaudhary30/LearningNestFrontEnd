import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/LearningNestNewLogo.png'; // Ensure the path is correct
import './Sidebar.css'; // Create a CSS file for styling the sidebar

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const isAdminPage = location.pathname === '/admin';

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      {/* Sidebar Toggle Button */}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Logo Section */}
      <div className="sidebar-logo" onClick={closeSidebar}>
        <img src={Logo} alt="LearningNest Logo" />
      </div>

      {/* Sidebar Links */}
      <ul className="sidebar-links">
        <li>
          <Link to="/" onClick={closeSidebar}>Home</Link>
        </li>
        <li>
          <Link to="/skills" onClick={closeSidebar}>Explore Skills</Link>
        </li>
        <li>
          <Link to="/mentors" onClick={closeSidebar}>Mentors</Link>
        </li>
        <li>
          <Link to="/communities" onClick={closeSidebar}>Communities</Link>
        </li>
      </ul>

      {/* Conditionally show "Get Started" button */}
      {!isAdminPage && (
        <Link to="/auth" className="sidebar-cta-button" onClick={closeSidebar}>
          Get Started
        </Link>
      )}
    </div>
  );
};

export default Sidebar;