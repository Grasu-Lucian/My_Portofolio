import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ toggleTheme, isNightMode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className="navbar fixed top-0 left-0 w-full bg-primary text-white flex justify-between items-center p-4">
        <div className="text-lg font-bold">Grasu Lucian</div>
        <ul className="flex space-x-4 items-center">
          <li><a href="#home" className="hover:bg-secondary p-2 rounded transition duration-300 ease-in-out">Home</a></li>
          <li><a href="#about" className="hover:bg-secondary p-2 rounded transition duration-300 ease-in-out">About</a></li>
          <li><a href="#contact" className="hover:bg-secondary p-2 rounded transition duration-300 ease-in-out">Contact</a></li>
          <li>
            <button 
              onClick={toggleTheme} 
              className={`night-mode-button ${isNightMode ? 'active' : ''}`}
            >
              <span className={`icon ${isNightMode ? 'fa fa-moon' : 'fa fa-sun'}`}></span>
            </button>
          </li>
        </ul>
        <button className="menu-button" onClick={handleMenuClick}>
          <i className="fa fa-bars"></i>
        </button>
      </nav>

      <div className={`modal ${isModalOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <a href="#home" onClick={handleMenuClick}>Home</a>
          <a href="#about" onClick={handleMenuClick}>About</a>
          <a href="#contact" onClick={handleMenuClick}>Contact</a>
          <button 
            onClick={() => {
              toggleTheme();
              handleMenuClick();
            }} 
            className={`night-mode-button ${isNightMode ? 'active' : ''}`}
          >
            <span className={`icon ${isNightMode ? 'fa fa-moon' : 'fa fa-sun'}`}></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;