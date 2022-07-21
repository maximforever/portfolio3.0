import React from "react";
import styled from "styled-components";

const Navigation = styled.ul<{open: boolean}>`
  opacity: ${(props) => props.open ? 1 : 0};
  transition: opacity var(--transition-time);
  display: flex;
  margin: 0px;
  padding: 0px;
  padding-bottom: 3rem;

  @media only screen and (min-width: 768px) {
    padding-bottom: 5rem;
  }
`;

const NavItem = styled.li`
  list-style: none;
  padding-right: 1rem;
  font-weight: 600;

  > a {
    color: var(--gray-medium);
  }

  @media only screen and (min-width: 768px) {
    padding-right: 3rem;
  }
`;

const Nav: React.FunctionComponent<{open: boolean}> = ({open}) => {
  return (
    <Navigation open={open}>
      <NavItem>
        <a href="/about">About</a>
      </NavItem>
      <NavItem>
        <a href="/projects">Projects</a>
      </NavItem>
      <NavItem>
        <a href="writing">Writing</a>
      </NavItem>
      <NavItem>
        <a href="https://www.tinylogger.com/max" target="_blank" rel="nofollow noreferrer">Blog</a>
      </NavItem>
      <NavItem>
        <a href="#">Resume</a>
      </NavItem>
    </Navigation>
  );
};

export default Nav;
