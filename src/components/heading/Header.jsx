import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./heading.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      

      <header>
        <nav className="nav">
          
          <ul className={click ? "mobile-nav" : ""} onClick={() => setClick(false)}>
          <div className='logo'>
            <img className="logoimg" src=".\src\assets\Images\LearningNestNewLogo.png" alt="logo" />
              
                 

            </div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">All Courses</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/journal">Journal</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>

          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
