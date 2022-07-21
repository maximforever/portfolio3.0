import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div<{open: boolean}>`
  display: block;
  padding-bottom: 1.5rem;
  text-align: ${(props) => props.open ? 'left' : 'center'};
  padding-top: ${(props) => props.open ? '0px' : '35vh'};
  transition: padding-top var(--transition-time);

  &:active, &:visited {
    color: var(--gray-dark);
  }

  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: var(--blue);
  }

  @media only screen and (min-width: 768px) {
    padding-top: ${(props) => props.open ? '0px' : '25vh'};
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
    </HeaderWrapper>
  );
};

export default Header;
