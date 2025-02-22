import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBook,
  FaChartLine,
  FaUser,
  FaCog,
  FaUserCircle,
  FaSignOutAlt,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/LearningNestNewLogo.png'; // Ensure correct path
import './Sidebar.css';

const menuItems = [
  // { id: 'home', label: 'Dashboard', icon: <FaHome /> },
  { id: 'courses', label: 'Courses', icon: <FaBook /> },
  // { id: 'progress', label: 'Progress', icon: <FaChartLine /> },
  { id: 'mentors', label: 'Mentors', icon: <FaUser /> },
  { id: 'profile', label: 'Profile', icon: <FaUserCircle /> },
];

const Sidebar = ({ setActiveSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleLogout = () => {
    // Clear user session (modify as per authentication method)
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      {/* Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Logo Section */}
      <div className="sidebar-logo">
        <img src={Logo} alt="LearningNest Logo" />
      </div>

      {/* Sidebar Links */}
      <nav>
        <ul className="sidebar-links" style={{ marginTop: '20px' }}>
          {menuItems.map(({ id, label, icon }) => (
            <li key={id}>
              <button onClick={() => { setActiveSection(id); closeSidebar(); }}>
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
  );
};

export default Sidebar;
