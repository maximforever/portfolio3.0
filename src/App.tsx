import "./App.css";
import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DarkModeToggle from "./components/DarkModeToggle";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import projects from "./projects.json";
import styled from "styled-components";
import writing from "./writing.json";

const AppWrapper = styled.div`
  margin: 5vw;

  @media only screen and (min-width: 768px) {
    margin: 5vw 0;
    margin-left: 4rem;
    margin-top: 2rem;
    width: 90%;
    max-width: 768px;
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
  const [darkMode, setDarkMode] = useState<boolean>(pageState());

  const toggleDarkMode = () => {
    console.log(`switching dark mode to: ${!darkMode}`);
    setDarkMode(!darkMode);
  }

  const setToOpen = (newState: boolean) => {
    setOpen(newState);
  };

  return (
    <AppWrapper className={`App ${darkMode ? 'dark-mode': ''}`}>
      <DarkModeToggle darkMode={darkMode} changeMode={() => toggleDarkMode()} />
      <Header
        open={open}
        setOpen={(newState: boolean) => setToOpen(newState)}
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
  );
}

export default App;
