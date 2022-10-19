import { Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe"
import Nav from "./Nav";
import NotFound from "./NotFound";
import ProjectsPage from "./ProjectsPage";
import React from "react";
import WritingPage from "./WritingPage";
import styled from "styled-components";

const MainWrapper = styled.div<{ open: boolean }>`
  max-height: ${(props) => props.open ? '100vh' : '0vh'};
  margin-top: ${(props) => props.open ? '0' : '-8rem'};
  transition-property: margin-top, max-height;
  transition-duration: var(--transition-time);
`

const Main: React.FunctionComponent<{
  open: boolean,
}> = ({ open }) => {
  return (
    <MainWrapper open={open}>
      <Nav open={open} currentPath={location.pathname} />
      <Routes>
        <Route path="/" element={null} />
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="writing" element={<WritingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainWrapper>
  )
};

export default Main;


