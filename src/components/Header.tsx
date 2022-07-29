import DarkModeToggle from "./DarkModeToggle";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.div<{open: boolean}>`
  text-align: ${(props) => props.open ? 'left' : 'center'};
  margin-top: ${(props) => props.open ? '0px' : '35vh'};
  transition: margin-top var(--transition-time);
  display: flex;

  @media only screen and (min-width: 768px) {
    margin-top: ${(props) => props.open ? '0px' : '32vh'};
    text-align: left;
  }
`

const TitleWrapper = styled.div`
  color: color: var(--gray-dark);
  user-select: none;

  &:active, &:visited {
    color: var(--gray-dark);
  }

  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: var(--blue);
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
  color: #dedede;
  padding-top: 1.5rem;
  padding-left: 48%;
  text-align: left;
  display: ${(props) => props.open ? "none" : "block"};

  animation-duration: 5s;
  animation-name: bounce;
  animation-iteration-count: infinite;

  @media only screen and (min-width: 768px) {
    padding-left: 12rem;
    font-size: 2rem;
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
  setOpen: (newState: boolean) => void,
  changeMode: (e: React.MouseEvent<HTMLElement>) => void,
}

const Header: React.FunctionComponent<PropsInterface> = ({open, setOpen, darkMode, changeMode}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);

    if(!open){
      navigate("/about");
    } else {
      navigate("/");
    }
  }

  return (
    <HeaderWrapper open={open}>
      <TitleWrapper onClick={handleClick}>
        <Heading open={open}>Max Pekarsky</Heading>
        <Subheading open={open}>full-stack product engineer</Subheading>
        <Finger open={open} className="lnr lnr-pointer-up"/>
      </TitleWrapper>
      <DarkModeToggle darkMode={darkMode} changeMode={(e) => changeMode(e)} open={open}/>
    </HeaderWrapper>
  );
};

export default Header;
