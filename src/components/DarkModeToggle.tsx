import React from "react";
import styled from "styled-components";

const ImageIcon = styled.span<{ darkMode: boolean, open: boolean }>`
  font-size: 1rem;
  font-weight: bold;
  opacity: ${(props) => props.open ? '1' : '0'};
  color: ${(props) => props.darkMode ? 'var(--yellow)' : 'var(--orange)'};
  visibility: ${(props) => props.open ? 'visible' : 'hidden'};
  padding-top: 1rem;
  font-size: 1.5rem;
  transition-property: opacity color;
  transition-duration: var(--transition-time);

  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
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
