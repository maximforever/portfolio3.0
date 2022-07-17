import Project from "./Project";
import { Project as ProjectInterface } from "../types";
import React from "react";

const Main: React.FunctionComponent<{
  projects: ProjectInterface[];
}> = ({ projects }) => {
  const renderProjects = () => {
    return projects.map((project, index) => <Project key={index} project={project} />);
  };

  return (
    <div>
      <h2>Projects:</h2>
      <div>{renderProjects()}</div>
    </div>
  );
};

export default Main;
