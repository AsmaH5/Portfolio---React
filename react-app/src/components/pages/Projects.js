import React from "react";
import Wrapper from "../Wrapper";
import ProjectCard from "../ProjectCard";
import projects from "../projects.json";
import "../styles/Projects.css";

function Projects() {
  return (
    <div>
      <h2 className="project-title">My Projects</h2>
      <Wrapper>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            repo={project.repo}
            link={project.link}
          />
        ))}
      </Wrapper>
    </div>
  );
}

export default Projects;
