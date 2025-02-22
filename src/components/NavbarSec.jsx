import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Images/LearningNestNewLogo.png'; // Correct Logo Path
import './NavbarSec.css'; 
import profilePicture from '../assets/Images/profile.jpeg'; // Import the profile picture

const NavbarSec = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isAdminPage = location.pathname === '/admin';

  // Navigate to Home when clicking the logo
  const handleLogoClick = () => {
    navigate('/skillsLogin'); // Redirect to Home
    closeMobileMenu(); // Close mobile menu if open
  };

  return (
    <nav className="navbarlog">
      {/* Logo Section - Click to Navigate to Home */}
      <div className="logo" onClick={handleLogoClick}>
        <img src={Logo} alt="LearningNest Logo" className="navbar-logo" />
      </div>

      {/* Desktop Menu */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        
        <li><Link to="/skillsLogin" onClick={closeMobileMenu}>Explore Skills</Link></li>
        <li><Link to="/mentorslogin" onClick={closeMobileMenu}>Mentors</Link></li>
        <li><Link to="/communitieslogin" onClick={closeMobileMenu}>Communities</Link></li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Always show profile picture */}
      {!isAdminPage && (
        <div className="profile-picture" onClick={() => navigate('/profile')}>
          <img src={profilePicture} alt="Profile" className="profile-img" />
        </div>
      )}
    </nav>
  );
};

export default NavbarSec;