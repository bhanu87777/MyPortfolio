import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 Bhanu Prakash. All Rights Reserved.</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/bhanuprakash777/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/bhanu87777?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
