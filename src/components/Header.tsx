import React from "react";
import finger from "../assets/finger.svg"
import styled from "styled-components";

const HeaderWrapper = styled.div<{open: boolean}>`
  display: block;
  text-align: ${(props) => props.open ? 'left' : 'center'};
  padding-top: ${(props) => props.open ? '0px' : '35vh'};
  transition: padding-top var(--transition-time);
  user-select: none;

  &:active, &:visited {
    color: var(--gray-dark);
  }

  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: var(--blue);
  }

  @media only screen and (min-width: 768px) {
    padding-top: ${(props) => props.open ? '0px' : '32vh'};
    text-align: left;
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
  font-weight: 400;
  margin: 0;
  transition: font-size var(--transition-time);

  @media only screen and (min-width: 768px) {
    font-size: ${(props) => props.open ? '1.2rem' : '1.8rem'};
  }
`

const Finger = styled.img<{open: boolean}>`
  height: 1.6rem;
  padding-top: 1rem;
  padding-left: 48%;
  display: ${(props) => props.open ? "none" : "block"};
  filter: opacity(0.2);

  @media only screen and (min-width: 768px) {
    padding-left: 12rem;
    padding-top: 1rem;
    height: 2rem;
  }
`

interface PropsInterface {
  open: boolean;
  setOpen: (newState: boolean) => void;
}

const Header: React.FunctionComponent<PropsInterface> = ({open, setOpen}) => {
  const handleClick = () => {
    setOpen(!open);

    if(!open){
      window.history.replaceState(null, "About Max", "/about")
    } else {
      window.history.replaceState(null, "Max Pekarsky: Product Engineer", "/")
    }
  }

  return (
    <HeaderWrapper open={open} onClick={handleClick}>
      <Heading open={open}>Max Pekarsky</Heading>
      <Subheading open={open}>full-stack product engineer</Subheading>
      <Finger open={open} src={finger}/>
    </HeaderWrapper>
  );
};

export default Header;
