import { Project as ProjectInterface } from "../types";
import React from "react";
import styled from "styled-components";

const StyledBlurb = styled.div`
  margin-bottom: 4rem;
  line-height: 1.6;
  font-weight: 400;
  max-width: 700px;

  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`

const Blurb: React.FunctionComponent<{ blurb: string }> = ({ blurb }) => {
  return <StyledBlurb>{blurb}</StyledBlurb>
};

export default Blurb;
