import React, { useState } from 'react';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
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
        <AboutMe />
        <Skills />
        <Projects isNightMode={isNightMode} />
        {/* Other components or content can go here */}
      </div>
    </div>
  );
}

export default App;