import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span>Portfolio</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects" className="project-btn">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
