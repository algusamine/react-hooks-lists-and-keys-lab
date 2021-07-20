import React from "react";
//import App from "./App";
function ProjectItem({ name, about, technologies }) {
  const techs = technologies.map((tech)=>{
        return <span key={tech}>{tech}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span>{techs}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
