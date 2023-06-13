import React, { useState } from "react";
import "./style.css";

function ProjectCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <button
              className="link-button"
              onClick={() => window.open(props.repo, "_blank")}
            >
              GitHub Repo
            </button>
          </li>
          <li>
            <button
              className="link-button"
              onClick={() => window.open(props.link, "_blank")}
            >
              Deployed Link
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
