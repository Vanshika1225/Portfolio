import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../images/Cover.jpg";
import "../App.css";
import "../css/navbar.css";
import { saveAs } from "file-saver";
import resumePDF from "../resume/Vanshika_Resume.pdf";

const Navbar = () => {
  const handleDownloadPDF = () => {
    saveAs(resumePDF, "Vanshika_Resume.pdf");
  };

  const handleHomeClick = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="navigation-bar">
        <div className="logo">
          <RouterLink to="/" onClick={handleHomeClick}>
            <img src={logo} alt="logo" />
          </RouterLink>
          <h4>Portfolio</h4>
        </div>
        <div className="navigation-options">
          <ul>
            <li className="li">
              <RouterLink className="Link" to="/" onClick={handleHomeClick}>
                Home
              </RouterLink>
              <Link className="Link" to="about" smooth={true} duration={500}>
                About
              </Link>
              <Link className="Link" to="skills" smooth={true} duration={500}>
                Skills
              </Link>
              <Link className="Link" to="projects" smooth={true} duration={500}>
                Projects
              </Link>
              <Link
                className="Link"
                to="education"
                smooth={true}
                duration={500}
              >
                Education
              </Link>
              <Link className="Link" to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="resume">
          <div>
            <button onClick={handleDownloadPDF}>Download PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
