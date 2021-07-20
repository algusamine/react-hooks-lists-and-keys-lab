import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const project = projects.map((pro) =>{
     <span key={pro}>{pro}</span>
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <span>{project}</span>
      </div>
    </div>
  );
}

export default ProjectList;
