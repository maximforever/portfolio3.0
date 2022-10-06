import React from "react";
import Resume from "../assets/Max_Pekarsky_Resume.pdf"
import styled from "styled-components";

const Navigation = styled.div<{ open: boolean }>`
  opacity: ${(props) => props.open ? 1 : 0};
  visibility: ${(props) => props.open ? "initial" : "hidden"};
  display: flex;
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

const NavItem = styled.a<{ active?: boolean }>`
  list-style: none;
  font-weight: 600;
  padding-bottom: 0.3rem;
  color: ${(props) => props.active ? 'var(--orange)' : 'var(--gray-medium)'};
  border-bottom: ${(props) => props.active ? "2px solid var(--orange)" : "initial"};
  margin-right: 2rem;

  &:hover {
    color: ${(props) => props.active ? 'var(--link-main)' : 'var(--link-hover)'};
  }

  @media only screen and (min-width: 512px) {
    margin-right: 3rem;
  }

  @media only screen and (min-width: 768px) {
    margin-right: 4rem;
  }
`;

const DesktopNavItem = styled(NavItem)`
display: none;

@media only screen and (min-width: 512px) {
  display: initial;
}
`

const MobileNavItem = styled.span`
  display: initial;
  color: var(--orange);
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media only screen and (min-width: 512px) {
    display: none;
  }
`

const Nav: React.FunctionComponent<{ open: boolean, currentPath: string }> = ({ open, currentPath }) => {
  const isPage = (pathname: string) => {
    return pathname === currentPath;
  }

  return (
    <Navigation open={open}>
      <NavItem active={isPage("/about")} href="/about">About</NavItem>
      <NavItem active={isPage("/projects")} href="/projects">Projects</NavItem>
      <NavItem active={isPage("/writing")} href="writing">Writing</NavItem>
      <DesktopNavItem href="https://www.tinylogger.com/max" target="_blank" rel="nofollow noreferrer">Blog</DesktopNavItem>
      <DesktopNavItem href={Resume} target="_blank" rel="noreferrer nofollow">Resume</DesktopNavItem>
    </Navigation>
  );
};

export default Nav;
