import React from 'react';
import { Link } from 'react-router-dom';

function NavTabs() {
  return (
    <div className="navbar">
      <div className='toggleButton'>
        <button></button>
      </div>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavTabs;
