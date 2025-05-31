import React from 'react'
import aboutImg from '../images/AboutImage.png';
import '../css/About.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
const About = () => {
  return (
    <div id='about'>
      <h1>About Me</h1>
      <p className='para'>My Introduction</p>
      <div className='about'>
        <div className='left-about'>
          <img src={aboutImg} alt="" style={{ height: '350px' }} />
        </div>
        <div className='about-right'>
          <div className='about'>
            <div className='about-card'>
              <i className="bi bi-lightbulb"></i>
              <span>3 Star</span>
              <span>Leetode</span>
            </div>
            <div className='about-card'>
              <i className="bi bi-lightbulb"></i>
              <span>Advance</span>
              <span>in React Js</span>
            </div>
            <div className='about-card'>
              <i className="bi bi-lightbulb"></i>
              <span>1K+</span>
              <span>GeekForGeek</span>
            </div>
          </div>
          <div className='para'> <p>Coding wizard with a love for the stars ✨ and seeking knowledge. A true team mate, bringing tech-savvy and eclectic passions to the table.</p></div>
        </div>
      </div>
    </div>
  )
}

export default About