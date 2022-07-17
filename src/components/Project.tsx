import React from "react";
import styled from "styled-components";

interface Project {
  title: string;
  description: string;
  id: number;
}

const Project = styled.div`
  padding: 1rem 0;
`;

const Title = styled.h3`
  font-weight: 600;
`;

const Description = styled.p`
  font-weight: 300;
`;
const Nav: React.FunctionComponent<{ project: Project }> = ({ project }) => {
  return (
    <Project>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
    </Project>
  );
};

export default Nav;
