import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg leading-relaxed">
        Hello! I'm a student at the Bucharest University of Economic Studies (ASE) in Romania, with a passion for creating projects that connect with the IT field. I enjoy building websites, developing APIs and diving into cybersecurity. My goal with this portfolio is to showcase these projects, highlight my learning journey, and demonstrate my dedication to mastering new skills in development and security.
      </p>
    </section>
  );
}

export default AboutMe;