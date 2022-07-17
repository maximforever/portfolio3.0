import React from "react";
import styled from "styled-components";

const Navigation = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
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
        <a href="#">Home</a>
      </NavItem>
      <NavItem>
        <a href="#">Projects</a>
      </NavItem>
      <NavItem>
        <a href="#">Writing</a>
      </NavItem>
      <NavItem>
        <a href="#">Blog</a>
      </NavItem>
    </Navigation>
  );
};

export default Nav;
