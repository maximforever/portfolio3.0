import { Blurb } from "./Blurb"
import ProjectList from "./ProjectList"
import React from "react";
import { WritingBlurb } from "./StaticTextBlocks";
import styled from "styled-components/macro";
import writing from "../writing.json";

const WritingWrapper = styled.div``

const WritingPage: React.FunctionComponent = () => (
  <WritingWrapper>
    <Blurb>
      <WritingBlurb />
    </Blurb>
    <ProjectList projects={writing} />
  </WritingWrapper>
)

export default WritingPage;
