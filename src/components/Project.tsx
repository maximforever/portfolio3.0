import { Project as ProjectInterface } from "../types";
import React from "react";
import styled from "styled-components";

const Project = styled.div`
  padding-bottom: 5rem;

  @media only screen and (min-width: 768px) {
    padding-bottom: 4rem;
  }
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0;
  padding-bottom: 0.5rem;
  font-family: var(--font-sans-serif);
`;

const Description = styled.p`
  color: #717171;
  margin: 0;
  padding-bottom: 0.5rem;
  line-height: 1.8;
  font-size: 0.9rem;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ProjectLink = styled.a`
  font-weight: 600;
  padding-bottom: 1rem;
  display: block;
  overflow-wrap: break-word;
  font-size: 0.9rem;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`

const Tag = styled.div`
  display: block;
  font-family: var(--font-monospace);
  font-weight: 500;
  border: 1px solid #c8c8c8;
  border-radius: 0.3rem;
  padding: 0rem 0.6rem;
  margin-right: 0.8rem;
  margin-bottom: 0.4rem;
  font-size: 0.8rem;

  @media only screen and (min-width: 768px) {
    font-size: 0.9rem;
  }
`

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Nav: React.FunctionComponent<{ project: ProjectInterface }> = ({ project }) => {
  const renderStack = () => {
    // writing projects don't have a stack
    if(project.stack === undefined){ return null }

    return project.stack.map((tech, index) =>  <Tag key={index}>{tech}</Tag>)
  }

  return (
    <Project>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</ProjectLink>
      <TagWrapper>{renderStack()}</TagWrapper>
    </Project>
  );
};

export default Nav;
