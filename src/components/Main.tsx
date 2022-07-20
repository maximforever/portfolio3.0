import { Page as PageType, Project as ProjectInterface } from "../types";
import AboutMe from "./AboutMe"
import Project from "./Project";
import React from "react";

const Main: React.FunctionComponent<{
  projects?: ProjectInterface[],
  page: PageType,
}> = ({ projects, page }) => {
  const renderProjects = () => {
    if (!projects) { return null }
    return projects.map((project, index) => <Project key={index} project={project} />);
  };

  if (page === "about") {
    return <AboutMe />
  } else {
    return <div>{renderProjects()}</div>
  }
};

export default Main;
