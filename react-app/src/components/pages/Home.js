import React from "react";
import "../styles/Home.css"

function Home() {
  return (
    <div className="Home">
      <div className="about">
        <h2>Hi, My name is Asma Hassan </h2>
        <div className="prompt">
            <p>
            I'm a Front-end Developer with a passion for designing and learning!
            </p>
            <button className="projectButton"/>
            <button className="resume"/>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <img src="../assets/images/programmer" alt="programmer" />
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
      </div>
    </div>
  );
}

export default Home;
