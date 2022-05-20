import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">TH Unlimited</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            
            <li><h3><Link to='/'>Home</Link></h3></li>
            <li><h3><Link to='/createcourse'>Create Course</Link></h3></li>
            
            <li><h3>Tour</h3></li>
            <li><h3>Projects</h3></li>
            <li><h3>Contact</h3></li>
          </ul>
        </div>
        
        
        <button className="button n-button">Contact</button>
      
      </div>
    </div>
  );
};

export default navbar;
