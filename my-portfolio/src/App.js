import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import './Navbar.css';
import AboutMe from './AboutMe';

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className={`App ${isNightMode ? 'dark' : ''}`}>
      <Navbar toggleTheme={toggleTheme} isNightMode={isNightMode} />
      <div className="pt-16 p-4 bg-background dark:bg-night text-primary dark:text-light margin-color">
        <AboutMe />
        {/* Other components or content can go here */}
      </div>
    </div>
  );
}

export default App;