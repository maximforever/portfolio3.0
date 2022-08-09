import React from "react";
import Resume from "../assets/Max_Pekarsky_Resume.pdf"
import styled from "styled-components";

const Navigation = styled.ul<{open: boolean}>`
  opacity: ${(props) => props.open ? 1 : 0};
  visibility: ${(props) => props.open ? "initial" : "hidden"};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  line-height: 2;
  transition: opacity var(--transition-time);
  margin: 0px;
  padding: 2rem 0 3rem 0;
  user-select: none;
  font-size: 0.9rem;

  @media only screen and (min-width: 512px) {
    justify-content: flex-start;
  }

  @media only screen and (min-width: 768px) {
    padding: 2rem 0 4rem 0;
    font-size: 1rem;
  }
`;

const NavItem = styled.li<{active?: boolean}>`
  list-style: none;
  font-weight: 600;

  > a {
    padding-bottom: 0.3rem;
    color: ${(props) => props.active ? 'var(--orange)' : 'var(--gray-medium)'};
    border-bottom: ${(props) => props.active ? "2px solid var(--orange)" : "initial"};

    &:hover {
      color: ${(props) => props.active ? 'var(--orange)' : 'var(--salmon)'};
    }
  }

  @media only screen and (min-width: 512px) {
    padding-right: 2rem;
  }

  @media only screen and (min-width: 768px) {
    padding-right: 3rem;
  }
`;

const Nav: React.FunctionComponent<{open: boolean, currentPath: string}> = ({open, currentPath}) => {
  const isPage = (pathname: string) => {
    return pathname === currentPath;
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
