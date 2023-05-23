import React from "react";
import "../styles/Home.css"
import myLogo from '../assets/images/Image1.png';



function Home() {
 
  const handleProjectsClick = () => {
    // Navigate to the project page
    window.location.href = "../projects";
  };

  const handleResumeClick = () => {
    // Download the resume document
    const link = document.createElement("a");
    link.href =  process.env.PUBLIC_URL + "/AsmaHassanCV.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    
    <div className="Home">
      <div className="about">

      <div className="avatarwrapper">
        <div className="image-container">
          <img src={myLogo} alt="hijabi with glasses avatar" className="avatar"/>
        </div>  
      </div>

        <div className="section">
            <h2>Asma Hassan </h2>
            <div className="prompt">
                <h5>Front-end Developer </h5>

                <div className="buttons">
                  <button className="projectButton" onClick={handleProjectsClick}>
                    Projects
                  </button>
                  <button className="resume" onClick={handleResumeClick}>
                    Resume
                  </button>
                </div>


            </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
