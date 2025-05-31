import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/Projects.css';
import image from '../images/template.png'
import image1 from '../images/newsman.jpg'

const Projects = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleClick1 = () => {
    setShowModal1(true);
  };

  const closeModal1 = () => {
    setShowModal1(false);
  };
  const handleClick2 = () => {
    setShowModal2(true);
  };

  const closeModal2 = () => {
    setShowModal2(false);
  };

  return (
    <>
      {showModal1 && (
        <div className='modal-backdrop'>
          <div className='modal'>
            <div className='modal-content'>
              <span className='close' onClick={closeModal1}>&times;</span>
              <h3>NewsMan Application</h3>
              <img src={image1} width='300px' height='200px' alt='Newman app' />
              <br></br>
              <br></br>
              <a href='https://github.com/Vanshika1225/NewsMan' target='_blank' rel='noreferrer'>
                Link Of Repository
              </a>
              <div style={{ display: 'flex', gap: '10px' }}>
                <i className="bi bi-check2-circle"></i> <p>Designed and Implemented a comprehensive Reat based Web application ,delivering up-to-date news accros various sector,Spanning both historical and current updates</p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>

                <i className="bi bi-check2-circle"></i><p>Proficintly utilized HTML, CSS, Javascript, and React to create a dynamic and user friendly inteface, ensuring seamless access to information </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal2 && (
        <div className='modal-backdrop'>
          <div className='modal'>
            <div className='modal-content'>
              <span className='close' onClick={closeModal2}>&times;</span>
              <h3>Quiz Application</h3>
              <img src={image} width='400px' height='150px' alt='Quiz app' />
              <br></br>
              <br></br>
              <a href='https://github.com/Vanshika1225/Quiz-App' target='_blank' rel='noreferrer'>
                Link Of Repository
              </a>
              <div style={{ display: 'flex', gap: '10px' }}>
                <i className="bi bi-check2-circle"></i> <p>Developed a responsive Quiz Application using React, allowing users to take dynamic quizzes and track their scores in real-time.</p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <i className="bi bi-check2-circle"></i><p>
                  Optimized the application for performance, reducing load times by 30%. </p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <i className="bi bi-check2-circle"></i><p>
                  Increased user engagement by 40% through interactive features and a user-friendly interface.. </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div id='projects'>
        <h1>Projects</h1>
        <p>Projects that I flex</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '150px' }}>
        <Card className='card'>
          <Card.Body className='card-body'>
            <i className='bi bi-kanban' style={{ fontSize: '50px' }}></i>
            <Card.Title>NewsMan Application</Card.Title>
            <p onClick={handleClick1}>
              Show More <i className='bi bi-arrow-right'></i>
            </p>
          </Card.Body>
        </Card>

        <Card className='card'>
          <Card.Body className='card-body'>
            <i className='bi bi-kanban' style={{ fontSize: '50px' }}></i>
            <Card.Title>Quiz Application</Card.Title>
            <p onClick={handleClick2}>
              Show More <i className='bi bi-arrow-right'></i>
            </p>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Projects;
