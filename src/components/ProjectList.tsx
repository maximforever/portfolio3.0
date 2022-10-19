import Project from "./Project";
import { Project as ProjectInterface } from "../types"
import React from "react";

const ProjectsList: React.FunctionComponent<{
  projects: ProjectInterface[]
}> = ({ projects }) => (
  <>
    {projects.map((project, index) => <Project key={index} project={project} />)}
  </>
)

export default ProjectsList;
