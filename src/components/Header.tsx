import React from "react";
import styled from "styled-components";

const NameHeading = styled.h1`
  font-family: var(--font-serif);
  font-size: 2.5rem;
  margin: 0px;

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Header: React.FunctionComponent = () => {
  return <NameHeading>Max Pekarsky</NameHeading>;
};

export default Header;
