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
        <ProjectCard
          name={projects[0].name}
          image={projects[0].image}
          description={projects[0].description}
          repo={
            <a href={projects[0].repo} target="_blank" rel="noopener noreferrer">
             Github Repo
            </a>
          }
          link={
            <a href={projects[0].link} target="_blank" rel="noopener noreferrer">
              {projects[0].name}
            </a>
          }
        />

        <ProjectCard
          name={projects[1].name}
          image={projects[1].image}
          description={projects[1].description}
          repo={
            <a href={projects[1].repo} target="_blank" rel="noopener noreferrer">
             Github Repo
            </a>
          }
          link={
            <a href={projects[1].link} target="_blank" rel="noopener noreferrer">
              {projects[1].name}
            </a>
          }
        />

        <ProjectCard
          name={projects[2].name}
          image={projects[2].image}
          description={projects[2].description}
          repo={
            <a href={projects[2].repo} target="_blank" rel="noopener noreferrer">
             Github Repo
            </a>
          }
          link={
            <a href={projects[2].link} target="_blank" rel="noopener noreferrer">
              {projects[2].name}
            </a>
          }
        />
        <ProjectCard
          name={projects[3].name}
          image={projects[3].image}
          description={projects[3].description}
          repo={
            <a href={projects[3].repo} target="_blank" rel="noopener noreferrer">
             Github Repo
            </a>
          }
          link={
            <a href={projects[3].link} target="_blank" rel="noopener noreferrer">
              {projects[3].name}
            </a>
          }
        />
        <ProjectCard
          name={projects[4].name}
          image={projects[4].image}
          description={projects[4].description}
          repo={
            <a href={projects[4].repo} target="_blank" rel="noopener noreferrer">
             Github Repo
            </a>
          }
          link={
            <a href={projects[4].link} target="_blank" rel="noopener noreferrer">
              {projects[4].name}
            </a>
          }
        />
        <ProjectCard
          name={projects[5].name}
          image={projects[5].image}
          description={projects[5].description}
          repo={
            <a href={projects[5].repo} target="_blank" rel="noopener noreferrer">
             Github Repo
            </a>
          }
          link={
            <a href={projects[5].link} target="_blank" rel="noopener noreferrer">
              {projects[5].name}
            </a>
          }
        />
      </Wrapper>
    </div>
  );
}

export default Projects;
