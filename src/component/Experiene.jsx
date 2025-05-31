import React from 'react'
import rbu from '../images/rbu.png'
import webmob from '../images/webmob.png'
import '../css/experience.css'
const Experiene = () => {
  return (
    <>
      <div className='experience-sectin' id='experience'>
        <h1>My Experience</h1>
        <div>                              
          <div className='experience-content'>
            <div className='content-box'>
              <div className='content-text'>
                <div style={{ display: 'flex' }}>
                  <img src={webmob} alt='' style={{ marginLeft: "-146px" }} /> <h5 style={{ textAlign: 'center', marginTop: "10px", marginLeft: "10px" }}>Frontend Intern at Webmob Software Solutions</h5>
                </div>
                <p style={{ marginRight: '-150px' }}>11 March, 2024-Present</p>
              </div>
              <div className='experience-description'>
                <p>As a frontend intern at WebMob, I crafted engaging user interfaces using HTML, CSS, JavaScript, and React.js. Collaborating with experienced professionals, I translated design concepts into seamless digital experiences. I honed my problem-solving skills through challenges like performance optimization. Continuous learning ensured I stayed updated with industry trends. Through feedback and hands-on experience, I grew as a developer. My internship at WebMob laid the groundwork for a rewarding career in frontend development.</p>
              </div>
            </div>
            <br></br>
            <div className='content-box'>
              <div className='content-text'>
                <div style={{ display: 'flex' }}>
                  <img src={rbu} alt='' /> <h5 style={{ textAlign: 'center', marginTop: "10px", marginLeft: "10px" }}>Full Stack Internship in Rayat Bahra University in Association with Excellenece Education</h5>
                </div>
                <p>10 July, 2023-30 August, 2023</p>
              </div>
              <div className='experience-description'>
                <p>Its a 2 month inhouse training based on Full stack development Get the immensive knowledge about both the front end and the backend technologiies like HTML,CSS,Javascript,Java,Learned Git for the version control</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experiene