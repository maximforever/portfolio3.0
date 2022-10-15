import { Project as ProjectInterface } from "../types";
import React from "react";
import styled from "styled-components";

const StyledBlurb = styled.div`
  margin-bottom: 4rem;
  line-height: 1.6;
  font-weight: 400;

  padding: 1rem;
  border-radius: 0.6rem;
  border: 1px solid ${({ theme }) => theme.darkMode ? "#263d4a" : "#e8e1cc"};

  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`

const Blurb: React.FunctionComponent<{ blurb: string }> = ({ blurb }) => {
  return <StyledBlurb>{blurb}</StyledBlurb>
};

export default Blurb;
