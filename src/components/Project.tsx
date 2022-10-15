import { Project as ProjectInterface } from "../types";
import React from "react";
import styled from "styled-components";

const Project = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0 6rem 6rem 0;
    width: 600px;
  }
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.darkMode ? "#93c5fa" : "#b8935f"};
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0;
  padding-bottom: 0.5rem;
  font-family: var(--font-sans-serif);
`;

const Description = styled.p`
  color: ${({ theme }) => theme.darkMode ? "var(--base-text-color-dark-mode)" : "var(--base-text-color)"};
  margin: 0;
  padding-bottom: 0.5rem;
  line-height: 1.8;
  font-size: 0.9rem;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Info = styled.div`
  flex: 2;
`;

const Visual = styled.div`
  background: yellow;
  height: 200px;
  width: 300px;
  margin-bottom: 1rem;
  display: block;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 1rem;
    // TODO: this is incorrect; come back to this to set the columns right.
    flex: 1;
  }
`;

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
    if (project.stack === undefined) { return null }

    return project.stack.map((tech, index) => <Tag key={index}>{tech}</Tag>)
  }

  return (
    <Project>
      <Visual></Visual>
      <Info>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <Title>{project.title}</Title>
        </a>
        <Description>{project.description}</Description>
        <TagWrapper>{renderStack()}</TagWrapper>
      </Info>
    </Project>
  );
};

export default Nav;
