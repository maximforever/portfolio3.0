import React from "react";
import moonIcon from "../assets/moon.svg"
import styled from "styled-components";
import sunIcon from "../assets/sun.svg"

const ImageIcon = styled.img``

const DarkModeToggle: React.FunctionComponent<{ darkMode: boolean, changeMode: () => void }> = ({ darkMode, changeMode }) => {
  const sun = <ImageIcon
    onClick={() => changeMode()}
    src={sunIcon}
    alt="an icon of the sun indicating that the website is in light mode. Click to toggle dark mode."
  />

  const moon = <ImageIcon
    onClick={() => changeMode()}
    src={moonIcon}
    alt="an icon of the moon indicating that the website is in dark mode. Click to toggle light mode."
  />;

  return darkMode ? moon : sun;
};

export default DarkModeToggle;
