import React from 'react';
import styled from 'styled-components';

const NameHeading = styled.h1`
  font-family: var(--serif-font);
  font-size: 3rem;
`

const Header: React.FunctionComponent = () => {
  return (
    <NameHeading>Max Pekarsky</NameHeading>
  );
}

export default Header;