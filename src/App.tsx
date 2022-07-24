import "./App.css";
import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
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

function App() {
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

  const setToOpen = (newState: boolean) => {
    setOpen(newState);
  };

  return (
    <AppWrapper className="App">
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
      </Routes>
    </AppWrapper>
  );
}

export default App;
