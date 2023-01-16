import { AboutMeText } from "./StaticTextBlocks";
import React from "react";
import styled from "styled-components/macro";

const AboutWrapper = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.8;
  overflow: hidden;
  max-width: 700px;

  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`

const AboutMe: React.FunctionComponent = () => (
  <AboutWrapper>
    <AboutMeText />
  </AboutWrapper>
)


export default AboutMe;
