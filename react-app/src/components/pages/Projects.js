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
          location={projects[0].location}
        />
        <ProjectCard
          name={projects[1].name}
          image={projects[1].image}
          description={projects[1].description}
          location={projects[1].location}
        />
        <ProjectCard
          name={projects[2].name}
          image={projects[2].image}
          description={projects[2].description}
          location={projects[2].location}
        />
        <ProjectCard
          name={projects[0].name}
          image={projects[0].image}
          description={projects[0].description}
          location={projects[0].location}
        />
        <ProjectCard
          name={projects[1].name}
          image={projects[1].image}
          description={projects[1].description}
          location={projects[1].location}
        />
        <ProjectCard
          name={projects[2].name}
          image={projects[2].image}
          description={projects[2].description}
          location={projects[2].location}
        />
      </Wrapper>
    </div>
  );
}

export default Projects;
