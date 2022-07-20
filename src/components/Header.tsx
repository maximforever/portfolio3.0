import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  padding-bottom: 1.5rem;
`

const Heading = styled.h1`
  font-family: var(--font-serif);
  font-size: 2.5rem;
  margin: 0px;
  margin-bottom: -0.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Subheading = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
`

const Header: React.FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <Heading>Max Pekarsky</Heading>
      <Subheading>full-stack product engineer</Subheading>
    </HeaderWrapper>
  );
};

export default Header;
