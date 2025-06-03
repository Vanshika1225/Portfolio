import React from "react";
import '../css/Footer.css';
import { FaTwitter, FaDiscord, FaPaperPlane, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Vanshika Kakkar</h2>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </div>
      <p>© Vanshika Kakkar</p>
    </footer>
  );
};

export default Footer;
