import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import Experiene from "./Experiene";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experiene />
      <Contact />
    </div>
  );
};

export default Home;
