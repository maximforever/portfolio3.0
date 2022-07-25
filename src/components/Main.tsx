import AboutMe from "./AboutMe"
import Project from "./Project";
import { Project as ProjectInterface } from "../types";
import React from "react";

const Main: React.FunctionComponent<{
  projects?: ProjectInterface[],
  open: boolean,
}> = ({ projects, open }) => {

  // this is not ideal, but for now, I got the About Me to work by displaying it with a max-height and opacity of 0
  // this way the CSS transitions work; if we just mount the component, they don't.
  // another solution is to use a hook to add a class:
  // https://letsbuildui.dev/articles/how-to-animate-mounting-content-in-react

  if (projects === undefined) {
    return <AboutMe open={open} />
  } else {
    return <>
    { projects.map((project, index) => <Project key={index} project={project} />) }
    </>
  }
};

export default Main;
