import React from "react";
import styled from "styled-components";

const Navigation = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
  padding-bottom: 1.5rem;

  @media only screen and (min-width: 768px) {
    padding-bottom: 3rem;
  }
`;

const NavItem = styled.li`
  list-style: none;
  margin-right: 1rem;
  font-weight: 600;

  > a {
    color: var(--gray-medium);
  }
`;

const Nav: React.FunctionComponent = () => {
  return (
    <Navigation>
      <NavItem>
        <a href="/about">Home</a>
      </NavItem>
      <NavItem>
        <a href="/projects">Projects</a>
      </NavItem>
      <NavItem>
        <a href="writing">Writing</a>
      </NavItem>
      <NavItem>
        <a href="#">Blog</a>
      </NavItem>
    </Navigation>
  );
};

export default Nav;
