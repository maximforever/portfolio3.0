import Project from "./Project";
import React from "react";

interface Project {
  title: string;
  description: string;
  id: number;
}

const Main: React.FunctionComponent<{
  projects: Project[];
}> = ({ projects }) => {
  const renderProjects = () => {
    return projects.map((project) => {
      return <Project key={project.id} project={project} />;
    });
  };

  return (
    <div>
      <h2>Projects:</h2>
      <div>{renderProjects()}</div>
    </div>
  );
};

export default Main;
