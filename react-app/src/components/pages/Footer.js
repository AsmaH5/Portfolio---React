import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <a href="https://github.com/AsmaH5" target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
        </a>
        <LinkedInIcon />
      </div>
      <p> &copy; 2023 asmahassan.com</p>
    </div>
    
  );
}

export default Footer;