import React from 'react';
import '../css/skills.css';
import { FaCode, FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJs, FaChartLine } from 'react-icons/fa';

const skillsData = [
  { id: 1, name: 'C++', icon: <FaCode />, description: 'C++ is a powerful general-purpose programming language.' },
  { id: 2, name: 'JAVA', icon: <FaJava />, description: 'Java is a high-level programming language.' },
  { id: 3, name: 'React', icon: <FaReact />, description: 'React is a JavaScript library for building user interfaces.' },
  { id: 4, name: 'HTML', icon: <FaHtml5 />, description: 'HTML is the standard markup language for creating web pages.' },
  { id: 5, name: 'CSS', icon: <FaCss3Alt />, description: 'CSS is a style sheet language used for describing the presentation of a document written in HTML.' },
  { id: 6, name: 'Git', icon: <FaGitAlt />, description: 'Git is a distributed version control system.' },
  { id: 7, name: 'JavaScript', icon: <FaJs />, description: 'JavaScript is a programming language that enables interactive web pages.' },
  { id: 8, name: 'Data Structures & Algorithms', icon: <FaChartLine />, description: 'DSA stands for Data Structures and Algorithms.' },
];

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <div style={{ alignItems: 'center' }}>
        <h1>My Skills</h1>
        <p className='class-para'>Things I know</p>
      </div>
      <div className='skills-grid'>
        {skillsData.map(skill => (
          <div className='skill-card' key={skill.id}>
            <div className='skill-icon'>{skill.icon}</div>
            <div className='skill-info'>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;