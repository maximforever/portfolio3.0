import { useLocation, useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import React from "react";
import styled from "styled-components/macro";

const TitleWrapper = styled.div<{open: boolean}>`
  color: color: var(--gray-dark);
  user-select: none;
  text-align: ${(props) => props.open ? 'left' : 'center'};
  width: 100%;
  transition: width var(--transition-time);

  &:active, &:visited {
    color: var(--gray-dark);
  }

  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: var(--link-hover);
  }

  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`

const HeaderWrapper = styled.div<{open: boolean}>`
  padding-top: ${(props) => props.open ? '0px' : '35vh'};
  transition: padding-top var(--transition-time);
  display: flex;

  @media only screen and (min-width: 768px) {
    padding-top: ${(props) => props.open ? '0px' : '32vh'};
  }
`

const Heading = styled.h1<{open: boolean}>`
  font-family: var(--font-serif);
  font-size: ${(props) => props.open ? '2.5rem' : '3rem'};
  margin: 0px;
  margin-bottom: -0.5rem;
  transition: font-size var(--transition-time);

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
    font-size: ${(props) => props.open ? '3rem' : '5rem'};
  }
`;

const Subheading = styled.h2<{open: boolean}>`
  font-size: ${(props) => props.open ? '1rem' : '1.3em'};
  font-weight: 300;
  margin: 0;
  transition: font-size var(--transition-time);

  @media only screen and (min-width: 768px) {
    font-size: ${(props) => props.open ? '1.2rem' : '1.8rem'};
  }
`

const Finger = styled.span<{open: boolean}>`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.darkMode ? "#0a415b" : "#dedede"};
  padding-top: 1.5rem;
  padding-left: 48%;
  text-align: left;
  display: ${(props) => props.open ? "none" : "block"};

  animation-duration: 5s;
  animation-name: bounce;
  animation-iteration-count: infinite;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    padding-left: 12rem;
  }

  @keyframes bounce {
    20%  { margin-top: 0px; }
    25% { margin-top: -0.3rem; }
    30% { margin-top: 0px; }
    35% { margin-top: -0.3rem; }
    40% { margin-top: 0px; }
  }
`

interface PropsInterface {
  open: boolean;
  darkMode: boolean,
  openOrCloseWebsite: (newState: boolean) => void,
  toggleDarkMode: (e: React.MouseEvent<HTMLElement>) => void,
}

const Header: React.FunctionComponent<PropsInterface> = ({ open, openOrCloseWebsite, darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    openOrCloseWebsite(!open);

    if (!open && location.pathname === "/") {
      navigate("/about");
    }
  }

  return (
    <HeaderWrapper open={open}>
      <TitleWrapper open={open} onClick={handleClick}>
        <Heading open={open}>Max Pekarsky</Heading>
        <Subheading open={open}>full-stack product engineer</Subheading>
        <Finger open={open} className="lnr lnr-pointer-up"/>
      </TitleWrapper>
      <DarkModeToggle darkMode={darkMode} changeMode={(e) => toggleDarkMode(e)} open={open} />
    </HeaderWrapper>
  );
};

export default Header;
