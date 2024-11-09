import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white flex justify-between items-center p-4">
      <div className="text-lg font-bold">My Portfolio</div>
      <ul className="flex space-x-4">
        <li><a href="#home" className="hover:bg-gray-700 p-2 rounded">Home</a></li>
        <li><a href="#about" className="hover:bg-gray-700 p-2 rounded">About</a></li>
        <li><a href="#contact" className="hover:bg-gray-700 p-2 rounded">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;