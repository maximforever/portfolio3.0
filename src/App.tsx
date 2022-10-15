import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./stylesheets/GlobalStyles";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import projects from "./projects.json";
import writing from "./writing.json";

const AppWrapper = styled.div`
  min-width: 350px;
  max-width: 1200px;
  padding: 5vw;
  margin: 0 auto;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    padding: 2rem 4rem;
    box-sizing: initial;
  }
`;

const App: React.FunctionComponent = () => {
  const location = useLocation();
  const pageState = () => {
    switch (location.pathname) {
      case "/":
        return false;
        break;
      default:
        return true;
        break;
    }
  };

  const [open, setOpen] = useState<boolean>(pageState());
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mountedComponent, setMountedComponent] = useState<boolean>(false);

  const toggleDarkMode = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    localStorage.setItem('MaximPekarskyDarkMode', `${!darkMode}`);
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    const darkModeOn = JSON.parse(localStorage.getItem("MaximPekarskyDarkMode") ?? "false")
    setDarkMode(darkModeOn);
    setMountedComponent(true);
  })

  const setToOpen = (newState: boolean) => {
    setOpen(newState);
  };

  // TODO: fix this - these should live in their own dedicated project/writing pages
  const writingBlurb = `I've always loved to write.
    When I started, I benefitted from many excellent tutorials and explanations.
    I also struggled to understand the seemingly-endless stream of interconnected concepts.
    I've always stayed close to the intersection of code, education, and writing.
    From my work at Codecademy and Execute Program to writing for StackOverflow and on my blog,
    I have a strong intrinsic motivation to pay it forward and simplify the journey for those learning to code today.
    So, I often write a lot about topics I struggled with, breaking them in ways I wish they were explain to me.
    Writing is an indispensible tool: it helps me organize my thinking, clearly communicate my ideas, and, hopefully, encourage the next generation of developers.`

  const projectsBlurb = `I started to code because I wanted to build useful tools for myself and others.
    Laser-focused on delivering user value, I am a product engineer first.
    I am always working on some project or another in my spare time.
    Coding is another means of creative expression, and as I get better at my craft, I get better at my art.
    I use many of my projects on a regular basis: I blog on Tinylogger, the blogging platform I built,
    and track my daily spending on Trakr.
    Several of my projects now have other users; so, when I struggle with a new concept, I check Hackterms.
    And soon, I hope to discover new great podcast episodes on GemFM.`

  return !mountedComponent ? <div /> : (
    <ThemeProvider theme={{ darkMode }}>
      <>
        <GlobalStyles />
        <AppWrapper>
          <Header
            open={open}
            darkMode={darkMode}
            setOpen={(newState: boolean) => setToOpen(newState)}
            changeMode={(e: React.MouseEvent<HTMLElement>) => toggleDarkMode(e)}
          />
          <Nav open={open} currentPath={location.pathname} />
          <Routes>
            <Route path="/" element={<Main open={open} />} />
            <Route path="about" element={<Main open={open} />} />
            <Route
              path="projects"
              element={<Main
                open={open}
                projects={projects}
                blurb={projectsBlurb}
              />}
            />
            <Route
              path="writing"
              element={<Main
                open={open}
                projects={writing}
                blurb={writingBlurb}
              />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppWrapper>
      </>
    </ThemeProvider >
  );
}

export default App;
