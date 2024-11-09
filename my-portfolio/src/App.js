import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App bg-background text-primary">
      <Navbar />
      <div className="pt-16 p-4">
        {/* Other components or content can go here */}
      </div>
    </div>
  );
}

export default App;