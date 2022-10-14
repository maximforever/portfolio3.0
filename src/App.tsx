import React, { useState } from "react";
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
  padding: 5vw;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    padding: 2rem 4rem;
    max-width: 2000px;
    margin: 0 auto;
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
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('MaxPekarskyDarkMode') === "true");
  console.log(`dark mode: ${darkMode}`);

  if (darkMode) {
    document.body.classList.add('dark-mode');
  }

  const toggleDarkMode = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('MaxPekarskyDarkMode', `${!darkMode}`);
    setDarkMode(!darkMode);
  }

  const setToOpen = (newState: boolean) => {
    setOpen(newState);
  };

  return (
    <ThemeProvider theme={{ darkMode }}>
      <>
        <GlobalStyles />
        <AppWrapper className={`App ${darkMode ? 'dark-mode' : ''}`}>
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
              element={<Main open={open} projects={projects} />}
            />
            <Route
              path="writing"
              element={<Main open={open} projects={writing} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppWrapper>
      </>
    </ThemeProvider >
  );
}

export default App;
