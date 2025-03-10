import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/LearningNestNewLogo.png'; // Correct Logo Path
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isAdminPage = location.pathname === '/admin';

  
  const handleLogoClick = () => {
    navigate('/'); // Redirect to Home
    closeMobileMenu(); // Close mobile menu if open
  };

  return (
    <nav className="navbar">
      
      <div className="logo" onClick={handleLogoClick}>
        <img src={Logo} alt="LearningNest Logo" className="navbar-logo" />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop and Mobile Menu */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/skills" onClick={closeMobileMenu}>
            Explore Skills
          </Link>
        </li>
        <li>
          <Link to="/mentors" onClick={closeMobileMenu}>
            Mentors
          </Link>
        </li>
        <li>
          <Link to="/communities" onClick={closeMobileMenu}>
            Communities
          </Link>
        </li>
      </ul>

     
      {!isAdminPage && (
        <Link to="/auth" className="cta-button" onClick={closeMobileMenu}>
          Get Started
        </Link>
      )}
    </nav>
  );
};

export default Navbar;