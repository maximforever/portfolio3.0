import React from "react";
import styled from "styled-components";

const ImageIcon = styled.span<{ darkMode: boolean, open: boolean }>`
  font-size: 1rem;
  opacity: ${(props) => props.open ? '1' : '0'};
  visibility: ${(props) => props.open ? 'visible' : 'hidden'};

  transition: opacity,1s;

  &:hover {
    color: ${(props) => props.darkMode ? 'yellow' : 'blue'};
    cursor: pointer;
  }
`

const DarkModeToggle: React.FunctionComponent<{
  darkMode: boolean,
  changeMode: (e: React.MouseEvent<HTMLElement>) => void,
  open: boolean,
}> = ({ darkMode, changeMode, open }) => {
  const sun = <ImageIcon
    darkMode={darkMode}
    open={open}
    onClick={(e) => changeMode(e)}
    className="lnr lnr-sun"
  />

  const moon = <ImageIcon
    darkMode={darkMode}
    open={open}
    onClick={(e) => changeMode(e)}
    className="lnr lnr-moon"
  />;

  return darkMode ? sun : moon;
};

export default DarkModeToggle;
