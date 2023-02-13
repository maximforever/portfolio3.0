import { Project as ProjectInterface } from "../types";
import React from "react";
import gemfm from '../assets/project_images/gemfm.gif';
import hackterms from '../assets/project_images/hackterms.gif';
import maximpekarsky from '../assets/project_images/maximpekarsky.gif';
import styled from "styled-components/macro";
import tinylogger from '../assets/project_images/tinylogger.gif';
import trakr from '../assets/project_images/trakr.gif';


const Project = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0 6rem 6rem 0;
  }
`;

const Title = styled.h3`
  color: ${({ theme }) => (theme.darkMode ? "inherit" : "#b49870")};
  font-weight: 600;
  font-size: 1.7rem;
  margin: 0;
  padding-bottom: 1rem;
  font-family: var(--font-sans-serif);

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    padding-bottom: 1.5rem;
  }
`;

const Description = styled.p`
  color: ${({ theme }) =>
    theme.darkMode
      ? "var(--base-text-color-dark-mode)"
      : "var(--base-text-color)"};
  margin: 0;
  padding-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1rem;
  font-weight: 400;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Info = styled.div`
  @media only screen and (min-width: 768px) {
    width: 600px;
  }
`;

const Visual = styled.img<{ imagePath: string }>`
  margin-bottom: 1rem;
  display: block;
  border-radius: 0.5rem;g
  height: auto;

  height: calc(90vw * 1/2);
  width: 90vw;
  box-sizing: border-box;

  // this is not a pretty way to get the image path, but it does work dynamically...
  background-color: black;
  background: ${(props) => `url("${props.imagePath}") no-repeat center center`};
  background-size: contain;

  @media only screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
    box-sizing: content-box;
    background-size: cover;
    margin-bottom: 0px;
    margin-right: 1rem;

  }
`;

const Tag = styled.div`
  color: ${(props) => (props.theme.darkMode ? "var(--orange-alt)" : "#948572")};
  background: ${(props) => (props.theme.darkMode ? "#1e3843" : "#f6efe5")};
  display: block;
  font-family: var(--font-monospace);
  font-weight: 500;
  border-radius: 0.8rem;
  padding: 0.3rem 0.9rem;
  margin-right: 1rem;
  margin-bottom: 0.8rem;
  font-size: 0.8rem;

  @media only screen and (min-width: 768px) {
    padding: 0.2rem 0.8rem;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Nav: React.FunctionComponent<{ project: ProjectInterface }> = ({
  project,
}) => {
  const renderTags = () => {
    // writing projects don't have a stack
    if (project.stack === undefined) {
      return null;
    }

    return project.stack.map((tech, index) => <Tag key={index}>{tech}</Tag>);
  };

  const imagesPaths: { [key: string]: string } = {
    hackterms: hackterms,
    gemfm: gemfm,
    tinylogger: tinylogger,
    trakr: trakr,
    maximpekarsky: maximpekarsky,
  };

  return (
    <>
      <Title>{project.title}</Title>
      <Project>
        {project.imageTitle && (
          <Visual imagePath={imagesPaths[project.imageTitle]} />
        )}
        <Info>
          <a href={project.link} target="_blank" rel="noopener noreferrer"></a>
          <Description>{project.description}</Description>
          <TagWrapper>{renderTags()}</TagWrapper>
        </Info>
      </Project>
    </>
  );
};

export default Nav;
