import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import React from "react";
import projects from "./projects.json";
import styled from "styled-components";

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
  return (
    <AppWrapper className="App">
      <Header />
      <Nav />
      <Main projects={projects} />
    </AppWrapper>
  );
}

export default App;
