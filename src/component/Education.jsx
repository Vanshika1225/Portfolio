import React from 'react'
import '../css/qualification.css'
const Education = () => {
  return (
    <div id='education'>
      <h1>Qualification</h1>
      <p>My Journey</p>

      <div>
        <div className='education-1'>
          <div className='education-data'>
            <h4>Undergraduation</h4>
            <p>Rayat Bahra University - Mohali</p>

            <p><i className="bi bi-calendar-date"></i>  2020-2024</p>
          </div>
          <div className='data'>
            <span className='qualification-rounder'></span>
            <span className='qualification-line'></span>
          </div>
        </div>

        <div className='education-1 edu-1'>
          <div className='data'>
            <span className='qualification-rounder'></span>
            <span className='qualification-line'></span>
          </div>
          <div className='education-data'>
            <h4>Class - XII</h4>
            <p>GMSSS, sector-33D - Chandigarh</p>

            <p><i className="bi bi-calendar-date"></i>  2019-2020</p>
          </div>
        </div>

        <div className='education-1 edu-2'>
          <div className='education-data'>
            <h4>Class - XII</h4>
            <p>Mohali Public School - Mohali</p>

            <p><i className="bi bi-calendar-date"></i>  2017-2018</p>
          </div>
          <div className='data'>
            <span className='qualification-rounder'></span>
            <span className='qualification-line'></span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Education