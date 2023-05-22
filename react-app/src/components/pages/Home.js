import React from "react";
import "../styles/Home.css"
import myImage from '../assets/images/Programmer.png';
import myLogo from '../assets/images/animeavatar2.png';


function Home() {
  return (
    <div className="Home">
      <div className="about">
      <div>
            <img className="avatar" src={myLogo} alt="hijabi with glasses avatar" />
        </div>
        <div className="section">
            <h2>Hi, My name is Asma Hassan </h2>
            <div className="prompt">
                <p>
                I'm a Front-end Developer with a passion for designing and learning!
                </p>
                <button className="projectButton"/>
                <button className="resume"/>
            </div>
        </div>

      </div>
      {/* <hr className="divider" />

      <div className="skills">
        <h1>Skills</h1>

        <div className="content">
        <ul className="list">
          <li className="item">HTML</li>
          <li className="item">CSS</li>
          <li className="item">JavaScript</li>
          <li className="item">Git</li>
          <li className="item">UX</li>
          <li className="item">Bootstrap</li>
          <li className="item">APIs</li>
          <li className="item">JQuery</li>
          <li className="item">JSON</li>
          <li className="item">React</li>
        </ul>
        <div className="programmer" >
          <img src={myImage} alt="programmer" />
        </div> 
        </div>
      </div> */}
    </div>
  );
}

export default Home;
