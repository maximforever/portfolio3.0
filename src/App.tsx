import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
    </div>
  );
}

export default App;
