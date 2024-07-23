import React from "react";
import { projectsData } from "./Data";

const ProjectItems = () => {
  return (
    <>
      {projectsData.map((project) => (
        <div className="project__card" key={project.id}>
          <img src={project.image} alt={project.title} className="project__img" />
          <h3 className="project__title">{project.title}</h3>
          <a href={project.link} className="project__button" target="_blank" rel="noopener noreferrer">
            Link <i className="bx bx-right-arrow-alt project__button-icon"></i>
          </a>
        </div>
      ))}
    </>
  );
};

export default ProjectItems;