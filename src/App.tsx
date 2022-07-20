import "./App.css";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import React from "react";
import projects from "./projects.json";
import styled from "styled-components";
import writing from "./writing.json";

const AppWrapper = styled.div`
margin: 5vw auto;
width: 90vw;

@media only screen and (min-width: 768px) {
  margin-left: 4rem;
  margin-top: 2rem;
  width: 90%;
  max-width: 768px;
}
`

function App() {
  const renderNav = () => {
    return <Nav />
  }

  return (
    <AppWrapper className="App">
      <Header />
      {renderNav()}
      <BrowserRouter>
        <Routes>
          <Route path="about" element={<Main page={"about"}/>} />
          <Route path="projects" element={<Main projects={projects} page={"projects"}/>} />
          <Route path="writing" element={<Main projects={writing} page={"writing"}/>} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
