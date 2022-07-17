import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import React from 'react';
import projects from './projects.json'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main projects={projects}/>
    </div>
  );
}

export default App;
