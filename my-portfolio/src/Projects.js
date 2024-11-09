import React, { useState, useEffect } from 'react';
import './Projects.css';
import candyCrushImage from './Photos/candy crush.eb648b239f8247ff1aa0.png';
import placeholder from './Photos/placeholder.png';
import cantina from './Photos/cantina.63f69966ee95f69d2331.png';
import retroGames from './Photos/image.png';

function Projects({ isNightMode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerRow, setProjectsPerRow] = useState(3);

  const projects = [
    {
      title: 'Cantina e cucina',
      description: 'This project is a copy of the original site cantina e cucina.It is a site which contains all the features of the previous one.',
      imageUrl: cantina,
      codeLink: 'https://github.com/Grasu-Lucian/cantina_e_cucina',
      siteLink: 'https://cantina-e-cucina.netlify.app/'
    },
    {
      title: 'Candy crush',
      description: 'This site holds the basic functionalities of a candy crush games and some special candies as well',
      imageUrl: candyCrushImage,
      codeLink: 'https://github.com/user/project2',
      siteLink: 'https://github.com/Grasu-Lucian/Candy_crush'
    },
    {
      title: 'Book-Store',
      description: `It's a RESTful API for managing books in a store with added user authentication using GO`,
      imageUrl: placeholder,
      codeLink: 'https://github.com/Grasu-Lucian/Book-Store',
    },
    {
      title:`Retro Games`,
      description:`A simple site i made using react that contains some information about retro games like space invaders, pacman and mario`,
      imageUrl:retroGames,
      codeLink:`https://github.com/Grasu-Lucian/Retrogames_project`,
      siteLink:`https://retro-games-by-grasu-lucian.netlify.app/`
    }

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