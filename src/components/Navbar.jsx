import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for mobile menu
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">LearningNest</div>

      {/* Desktop Menu */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
        <li><Link to="/skills" onClick={() => setIsMobileMenuOpen(false)}>Explore skills</Link></li>
        <li><Link to="/mentors" onClick={() => setIsMobileMenuOpen(false)}>Mentors</Link></li>
        <li><Link to="/communities" onClick={() => setIsMobileMenuOpen(false)}>Communities</Link></li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Call-to-Action Button */}
      <Link to="/auth" className="cta-button">Get Started</Link>
    </nav>
  );
};

export default Navbar;