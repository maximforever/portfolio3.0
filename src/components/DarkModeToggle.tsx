import React from "react";
import moonIcon from "../assets/moon.svg"
import styled from "styled-components";
import sunIcon from "../assets/sun.svg"

const ImageIcon = styled.img<{darkMode: boolean}>`
  height: 2rem;
  &:hover {
    filter: ${(props) => props.darkMode ?
      'invert(9%) sepia(100%) saturate(5968%) hue-rotate(246deg) brightness(102%) contrast(148%)'
      :
      'invert(92%) sepia(40%) saturate(2856%) hue-rotate(358deg) brightness(107%) contrast(104%)'
    };
    cursor: pointer;
  }
`

const DarkModeToggle: React.FunctionComponent<{ darkMode: boolean, changeMode: () => void }> = ({ darkMode, changeMode }) => {
  const sun = <ImageIcon
    darkMode={darkMode}
    onClick={() => changeMode()}
    src={sunIcon}
    alt="an icon of the sun indicating that the website is in light mode. Click to toggle dark mode."
  />

  const moon = <ImageIcon
    darkMode={darkMode}
    onClick={() => changeMode()}
    src={moonIcon}
    alt="an icon of the moon indicating that the website is in dark mode. Click to toggle light mode."
  />;

  return darkMode ? sun : moon;
};

export default DarkModeToggle;
