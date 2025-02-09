import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./header.css";
import Head from "./Head";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
    <nav className="nav">
      <img className="logo" src=".\src\assets\Images\LearningNestNewLogo.png" alt="logo" />
      <ul className={click ? "mobile-nav" : ""} onClick={() => setClick(false)}>
        <li className="list"><Link to="/">Home</Link></li>
        <li className="list"><Link to="/courses">All Courses</Link></li>
        <li className="list"><Link to="/about">About</Link></li>
        <li className="list"><Link to="/team">Team</Link></li>
        <li className="list"><Link to="/pricing">Pricing</Link></li>
        <li className="list"><Link to="/journal">Journal</Link></li>
        <li className="list"><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="start">
        <div className="button">GET CERTIFICATE</div>
      </div>
      <button className="toggle" onClick={() => setClick(!click)}>
        {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
      </button>
    </nav></>
  );
};

export default Header;
