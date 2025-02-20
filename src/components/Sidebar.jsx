import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/LearningNestNewLogo.png'; // Ensure the path is correct
import './Sidebar.css'; // Sidebar styling

const Sidebar = ({ setActiveSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

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
          <button onClick={() => { setActiveSection('home'); closeSidebar(); }}>Dashboard</button>
        </li>
        <li>
          <button onClick={() => { setActiveSection('courses'); closeSidebar(); }}>Courses</button>
        </li>
        <li>
          <button onClick={() => { setActiveSection('progress'); closeSidebar(); }}>Progress</button>
        </li>
        <li>
          <button onClick={() => { setActiveSection('mentors'); closeSidebar(); }}>Mentors</button>
        </li>
        <li>
          <button onClick={() => { setActiveSection('settings'); closeSidebar(); }}>Settings</button>
        </li>
      </ul>

      {/* Logout Button */}
      <button className="sidebar-logout-button" onClick={() => {
        // Handle logout logic here
        closeSidebar();
      }}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;