import React, { useState } from 'react';
import { FaBars, FaTimes, FaBook, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/LearningNestNewLogo.png'; // Ensure correct path
import './Sidebar.css';

const menuItems = [
  { id: 'courses', label: 'Add Courses', icon: <FaBook /> },
  { id: 'manageMentor', label: 'Manage Mentors', icon: <FaUser /> }, // Updated ID to match the route
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleLogout = () => {
    // Clear user session (modify as per authentication method)
    localStorage.removeItem('userToken');
    navigate('/');
  };

  const handleNavigation = (id) => {
    if (id === 'manageMentor') {
      navigate('/manageMentor'); // Navigate to the ManageMentor page
    } else if (id === 'courses') {
      // Handle navigation for other buttons if needed
      console.log('Navigate to Courses');
    }
    closeSidebar(); // Close the sidebar after navigation
  };

  return (
    <>
      {/* Sidebar Toggle Button for Mobile */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar Container */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* Logo Section */}
        <div className="sidebar-logo">
          <img src={Logo} alt="LearningNest Logo" />
        </div>

        {/* Sidebar Links */}
        <nav>
          <ul className="sidebar-links">
            {menuItems.map(({ id, label, icon }) => (
              <li key={id}>
                <button onClick={() => handleNavigation(id)}>
                  {icon} {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="sidebar-logout">
          <button onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;