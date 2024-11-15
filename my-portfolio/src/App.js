import React, { useState } from 'react';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';
import './App.css';

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className={`App ${isNightMode ? 'dark' : ''}`}>
      <Navbar toggleTheme={toggleTheme} isNightMode={isNightMode} />
      <div className="pt-16 p-4 bg-background dark:bg-night text-primary dark:text-light">
        <section id="about-me">
          <AboutMe />
        </section>
        <Skills isNightMode={isNightMode} />
        <section id="projects">
          <Projects isNightMode={isNightMode} />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
        {/* Other components or content can go here */}
      </div>
    </div>
  );
}

export default App;