import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for mobile menu
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">LearningNest</div>

      {/* Desktop Menu */}
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

      {/* Mobile Menu Toggle Button */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Call-to-Action Button */}
      <Link to="/auth" className="cta-button" onClick={closeMobileMenu}>
        Get Started
      </Link>
    </nav>
  );
};

export default Navbar;