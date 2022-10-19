import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./stylesheets/GlobalStyles";
import Header from "./components/Header";
import Main from "./components/Main";
import { useLocation } from "react-router-dom";

const AppWrapper = styled.div`
  min-width: 350px;
  max-width: 2000px;
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
  const onHomepage = () => location.pathname === "/";

  const [open, setOpen] = useState<boolean>(!onHomepage());
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

  const openOrCloseWebsite = (newState: boolean) => {
    setOpen(newState);
  };

  return !mountedComponent ? <div /> : (
    <ThemeProvider theme={{ darkMode }}>
      <>
        <GlobalStyles />
        <AppWrapper>
          <Header
            open={open}
            darkMode={darkMode}
            openOrCloseWebsite={(newState: boolean) => openOrCloseWebsite(newState)}
            toggleDarkMode={(e: React.MouseEvent<HTMLElement>) => toggleDarkMode(e)}
          />
          <Main open={open} />
        </AppWrapper>
      </>
    </ThemeProvider >
  );
}

export default App;
