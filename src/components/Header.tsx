import React from "react";
import finger from "../assets/finger.svg"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.div<{open: boolean}>`
  display: block;
  text-align: ${(props) => props.open ? 'left' : 'center'};
  margin-top: ${(props) => props.open ? '0px' : '35vh'};
  transition: margin-top var(--transition-time);
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
    margin-top: ${(props) => props.open ? '0px' : '32vh'};
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
  font-weight: 300;
  margin: 0;
  transition: font-size var(--transition-time);

  @media only screen and (min-width: 768px) {
    font-size: ${(props) => props.open ? '1.2rem' : '1.8rem'};
  }
`

const Finger = styled.img<{open: boolean}>`
  height: 1.6rem;
  padding-top: 1.5rem;
  padding-left: 48%;
  display: ${(props) => props.open ? "none" : "block"};
  filter: opacity(0.15);

  animation-duration: 5s;
  animation-name: bounce;
  animation-iteration-count: infinite;

  @media only screen and (min-width: 768px) {
    padding-left: 12rem;
    height: 2rem;
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
  setOpen: (newState: boolean) => void;
}

const Header: React.FunctionComponent<PropsInterface> = ({open, setOpen}) => {
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
    <HeaderWrapper open={open} onClick={handleClick}>
      <Heading open={open}>Max Pekarsky</Heading>
      <Subheading open={open}>full-stack product engineer</Subheading>
      <Finger open={open} src={finger} alt="bouncing finger icon that encourage the user to click on the header and reveal the about me"/>
    </HeaderWrapper>
  );
};

export default Header;
