import { AboutMeText } from "./StaticTextBlocks";
import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div<{ open: boolean }>`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.8;
  overflow: hidden;
  max-width: 700px;
  max-height: ${(props) => props.open ? '100vh' : '0vh'};
  margin-top: ${(props) => props.open ? '0' : '-8rem'};
  transition-property: margin-top, max-height;
  transition-duration: var(--transition-time);

  > p {
    margin: 0;
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`

const AboutMe: React.FunctionComponent<{ open: boolean }> = ({ open }) => {
  return (
    <AboutWrapper open={open}>
      <AboutMeText />
    </AboutWrapper>
  )
}

export default AboutMe;
