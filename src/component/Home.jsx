import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Education from "./EducationAndExperience";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
