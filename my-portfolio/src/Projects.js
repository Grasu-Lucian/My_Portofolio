import React, { useState, useEffect } from 'react';
import './Projects.css';
import candyCrushImage from './Photos/candy crush.eb648b239f8247ff1aa0.png';
import placeholder from './Photos/placeholder.png';

function Projects({ isNightMode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerRow, setProjectsPerRow] = useState(3);

  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      imageUrl: placeholder,
      codeLink: 'https://github.com/user/project1',
      
    },
    {
      title: 'Candy crush',
      description: 'This site holds the basic functionalities of a candy crush games and some special candies as well',
      imageUrl: candyCrushImage,
      codeLink: 'https://github.com/user/project2',
      siteLink: 'https://github.com/Grasu-Lucian/Candy_crush'
    },
    {
      title: 'Project 3',
      description: 'Description of project 3',
      imageUrl: placeholder,
      codeLink: 'https://github.com/user/project3',
      siteLink: 'https://project3.com'
    },
    {
      title: 'Project 3',
      description: 'Description of project 3',
      imageUrl: placeholder,
      codeLink: 'https://github.com/user/project3',
      siteLink: null // No site link available
    },
    // Add more projects as needed
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setProjectsPerRow(1);
      } else if (window.innerWidth <= 770) {
        setProjectsPerRow(2);
      } else {
        setProjectsPerRow(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the correct value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < Math.ceil(projects.length / projectsPerRow) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getVisibleProjects = () => {
    const startIndex = currentIndex * projectsPerRow;
    return projects.slice(startIndex, startIndex + projectsPerRow);
  };

  return (
    <section id="projects" className={`projects-section ${isNightMode ? 'dark-mode' : ''}`}>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="slider">
        <button
          className="arrow-button left"
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          &lt;
        </button>
        <div className="projects-container">
          {getVisibleProjects().map((project, index) => (
            <div key={index} className="project">
              <img src={project.imageUrl} alt={project.title} />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
              <div className="buttons">
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="button">
                  View Code
                </a>
                {project.siteLink && (
                  <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="button">
                    View Site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          className="arrow-button right"
          onClick={handleNextClick}
          disabled={currentIndex === Math.ceil(projects.length / projectsPerRow) - 1}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}

export default Projects;