import React from "react";
import image from "../images/sidePic.jpg";
import instaImage from "../images/insta.webp";
import linkedIn from "../images/linkedin.png";
import githubimages from "../images/github.png";
import mail from "../images/mail.png";
import "../css/hero.css";
const Hero = () => {
  const sendMail = () => {
    const recipientEmail = "vanshika.rbu@gmail.com";
    const mailtoLink = `mailto:${recipientEmail}`;
    window.location.href = mailtoLink;
  };
  return (
    <>
      <div className="hero">
        <div className="left">
          <h3>
            {" "}
            Hi, My name is <span>Vanshika </span>
            And I have a good command in
            <span>
              {" "}
              Frontend Technologies like HTML5 , CSS3 , Javascript and ReactJs
            </span>
          </h3>
          <hr />

          <div className="home-logo">
            <a href="https://leetcode.com/user6789s/">
              <img
                src={instaImage}
                style={{ width: "30px" }}
                alt="insta image"
              />
            </a>
            <a href="https://www.linkedin.com/in/er-vanshika-kakkar-04769721b?utm_source=share &utm_compaign=share_via&utm_content=profile&utm_medium=android_app">
              <img
                src={linkedIn}
                style={{ height: "38px" }}
                alt="linked image"
              />
            </a>
            <a href="https://github.com/Vanshika1225">
              <img src={githubimages} alt="github image" />
            </a>
            <a>
              <img src={mail} alt="mail image" onClick={sendMail} />
            </a>
          </div>
        </div>
        <div className="right">
          <img src={image} alt="sidepic" />
        </div>
      </div>
    </>
  );
};

export default Hero;
