import { Blurb } from "./Blurb"
import ProjectList from "./ProjectList"
import { ProjectsBlurb } from "./StaticTextBlocks";
import React from "react";
import projects from "../projects.json";
import styled from "styled-components";

const ProjectsWrapper = styled.div``

const ProjectsPage: React.FunctionComponent = () => (
  <ProjectsWrapper>
    <Blurb>
      <ProjectsBlurb />
    </Blurb>
    <ProjectList projects={projects} />
  </ProjectsWrapper>
)

export default ProjectsPage;
