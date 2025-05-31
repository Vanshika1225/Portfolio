import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Skills from './Skills'
import Experiene from './Experiene'
import About from './About'
import Projects from './Projects'
import Education from './Education'
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
    </div>
  )
}

export default Home