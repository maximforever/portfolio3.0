import React, { useEffect, useState } from "react";
import Resume from "../assets/Max_Pekarsky_Resume.pdf"
import styled from "styled-components/macro";

const Navigation = styled.div`
  line-height: 2;
  transition: opacity var(--transition-time);
  margin: 0px;
  padding: 2rem 0;
  user-select: none;
  font-size: 0.9rem;

  /* position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.darkMode ?
    "var(--base-background-color-dark-mode)"
    :
    "var(--base-background-color)"}; */

  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;

  @media only screen and (min-width: 512px) {
    align-items: flex-start;
    font-size: 1rem;
    justify-content: flex-start;
  }

  @media only screen and (min-width: 768px) {
    padding: 0;
    font-size: 1rem;
  }
`;

const NavItems = styled.div<{ navOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: ${(props) => props.navOpen ? "100vh" : "0vh"};
  overflow: hidden;
  transition-property: margin-top, max-height;
  transition-duration: ${(props) => props.navOpen ? "var(--transition-time)" : "0s"};

  .lnr-arrow-right {
    font-weight: 600;
    padding-left: 0.5rem;
  }

  @media only screen and (min-width: 512px) {
    flex-direction: row;
    font-size: 1rem;
    justify-content: flex-start;
    max-height: 100vh;
  }

  @media only screen and (min-width: 768px) {
    padding: 2rem 0 4rem 0;
    font-size: 1rem;
  }
`

const getBorderColor = (darkMode: boolean): string => darkMode ? "var(--orange-alt)" : "var(--orange)";

const NavItem = styled.a<{ active?: boolean }>`
  font-weight: 600;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${(props) => props.active ? getBorderColor(props.theme.darkMode) : "none"};
  margin-right: 2rem;

  &:hover {
  color: ${ (props) => props.active ? 'var(--orange-alt) !important' : 'var(--link-hover) !important' };
  }

  @media only screen and (min-width: 512px) {
    margin-bottom: 0px;
    margin-right: 3rem;
  }

  @media only screen and (min-width: 768px) {
    margin-right: 4rem;
  }
`;

const NavToggle = styled.span`
  @media only screen and (min-width: 512px) {
    display: none;
  }
`

const Nav: React.FunctionComponent<{ currentPath: string }> = ({ currentPath }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false)

  useEffect(() => {
    // if the website state is "closed" (only name is displayed), we should immediately close the menu
    if (!open) {
      setNavOpen(false);
    }
  });

  const isPage = (pathname: string) => {
    return pathname === currentPath;
  }

  const toggleOpen = () => { setNavOpen(!navOpen) }

  return (
    <Navigation>
      <NavToggle onClick={toggleOpen} className={navOpen ? "lnr lnr-cross" : "lnr lnr-menu"} />
      <NavItems navOpen={navOpen}>
        <NavItem active={isPage("/about")} href="/about">About</NavItem>
        <NavItem active={isPage("/projects")} href="/projects">Projects</NavItem>
        <NavItem active={isPage("/writing")} href="writing">Writing</NavItem>
        <NavItem href="https://www.tinylogger.com/max" target="_blank" rel="nofollow noreferrer">
          Blog
          <span className="lnr lnr-arrow-right"></span>
        </NavItem>
        <NavItem href={Resume} target="_blank" rel="noreferrer nofollow">
          Resume
          <span className="lnr lnr-arrow-right"></span>
        </NavItem>
      </NavItems>
    </Navigation>
  );
};

export default Nav;
