import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../images/Cover.jpg";
import jsPDF from "jspdf";
import "../App.css";
import resumeImage from "../images/Resume1.png";
import "../css/navbar.css";
const Navbar = () => {
  const handleDownloadPDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const img = new Image();
    img.src = resumeImage;
    img.onload = () => {
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = img.width;
      const imgHeight = img.height;

      const aspectRatio = imgWidth / imgHeight;
      let renderWidth = pageWidth;
      let renderHeight = renderWidth / aspectRatio;

      if (renderHeight > pageHeight) {
        renderHeight = pageHeight;
        renderWidth = renderHeight * aspectRatio;
      }

      const x = (pageWidth - renderWidth) / 2;
      const y = (pageHeight - renderHeight) / 2;

      pdf.addImage(img, "PNG", x, y, renderWidth, renderHeight);
      pdf.save("downloaded-file.pdf");
    };
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
              <Link
                className="Link"
                to="contact"
                smooth={true}
                duration={500}
              >
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
