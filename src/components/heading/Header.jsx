// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./heading.css";

// const Header = () => {
//   const [click, setClick] = useState(false);

//   return (
//     <header>
//       <nav className="nav">
//         {/* Logo Section */}
//         <div className="logo">
//           <img className="logoimg" src="/src/assets/Images/LearningNestNewLogo.png" alt="LearningNest Logo" />
//         </div>

//         {/* Navigation Links */}
//         <ul className={click ? "nav-links mobile-nav" : "nav-links"} onClick={() => setClick(false)}>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/courses">All Courses</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/team">Team</Link></li>
//           <li><Link to="/pricing">Pricing</Link></li>
//           <li><Link to="/journal">Journal</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>

//         {/* Call to Action Button */}
//         <div className="start">
//           <button className="button">GET CERTIFICATE</button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button className="toggle" onClick={() => setClick(!click)}>
//           {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
//         </button>
//       </nav>
//     </header>
//   );
// };

// export default Header;
