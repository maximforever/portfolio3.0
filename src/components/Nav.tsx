import React from "react";
import Resume from "../assets/Max_Pekarsky_Resume.pdf"
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Navigation = styled.ul<{open: boolean}>`
  opacity: ${(props) => props.open ? 1 : 0};
  visibility: ${(props) => props.open ? "initial" : "hidden"};
  display: flex;
  transition: opacity var(--transition-time);
  margin: 0px;
  padding: 0px;
  padding: 3rem 0;
  user-select: none;

  @media only screen and (min-width: 768px) {
    padding: 4rem 0;
  }
`;

const NavItem = styled.li<{active?: boolean}>`
  list-style: none;
  padding-right: 1rem;
  font-weight: 600;

  > a {
    color: ${(props) => props.active ? 'greeen' : 'var(--gray-medium)'};
  }

  @media only screen and (min-width: 768px) {
    padding-right: 3rem;
  }
`;

const Nav: React.FunctionComponent<{open: boolean}> = ({open}) => {
  const location = useLocation();
  console.log(location.pathname);

  const isPage = (pathname: string) => {
    return pathname === location.pathname;
  }

  return (
    <Navigation open={open}>
      <NavItem active={isPage("/about")}>
        <a href="/about">About</a>
      </NavItem>
      <NavItem active={isPage("/projects")}>
        <a href="/projects">Projects</a>
      </NavItem>
      <NavItem active={isPage("/writing")}>
        <a href="writing">Writing</a>
      </NavItem>
      <NavItem>
        <a href="https://www.tinylogger.com/max" target="_blank" rel="nofollow noreferrer">Blog</a>
      </NavItem>
      <NavItem>
        <a href={Resume} target="_blank" rel="noreferrer nofollow">Resume</a>
      </NavItem>
    </Navigation>
  );
};

export default Nav;
