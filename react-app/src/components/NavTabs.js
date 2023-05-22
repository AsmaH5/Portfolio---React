import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavTabs.css"
import MenuIcon from '@mui/icons-material/Menu';

function NavTabs() {
  return (
    <div className="navbar">
      <div className='toggleButton'>
        <button> 
          <MenuIcon/>
        </button>
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
