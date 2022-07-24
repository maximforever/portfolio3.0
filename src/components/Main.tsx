import React, { useEffect } from "react";
import AboutMe from "./AboutMe"
import Project from "./Project";
import { Project as ProjectInterface } from "../types";

const Main: React.FunctionComponent<{
  projects?: ProjectInterface[],
  open: boolean,
}> = ({ projects, open }) => {
  const renderProjects = () => {
    if (projects === undefined) { return null }
    return projects.map((project, index) => <Project key={index} project={project} />);
  };

  if (!open) {
    return null;
  } else if (projects === undefined) {
    return <AboutMe open={open} />
  } else {
    return <div>{renderProjects()}</div>
  }
};

export default Main;
