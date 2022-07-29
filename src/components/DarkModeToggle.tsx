import React from "react";
import styled from "styled-components";

const ImageIcon = styled.span<{ darkMode: boolean }>`
  font-size: 1rem;
  &:hover {
    color: ${(props) => props.darkMode ? 'yellow' : 'blue'};
    cursor: pointer;
  }
`

const DarkModeToggle: React.FunctionComponent<{
  darkMode: boolean,
  changeMode: () => void,
  open: boolean,
}> = ({ darkMode, changeMode, open }) => {
  if (!open) { return null }

  const sun = <ImageIcon
    darkMode={darkMode}
    onClick={() => changeMode()}
    className="lnr lnr-sun"
  />

  const moon = <ImageIcon
    darkMode={darkMode}
    onClick={() => changeMode()}
    className="lnr lnr-moon"
  />;

  return darkMode ? sun : moon;
};

export default DarkModeToggle;
