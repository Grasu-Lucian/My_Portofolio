import React from 'react';
import './AboutMe.css';
import meImage from './Photos/me.png'; // Ensure the image is in the correct path

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <h2>Hello! Welcome to my portfolio</h2>
        <p>
          Hello! I'm a student at the Bucharest University of Economic Studies (ASE) in Romania, with a passion for creating projects that connect with the IT field. I enjoy building websites, developing APIs and diving into cybersecurity. My goal with this portfolio is to showcase these projects, highlight my learning journey, and demonstrate my dedication to mastering new skills in development and security.
        </p>
      </div>
      <div className="about-me-image">
        <img src={meImage} alt="Me" />
      </div>
    </section>
  );
}

export default AboutMe;