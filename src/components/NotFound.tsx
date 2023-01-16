import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components/macro";

const NotFoundWrapper = styled.div`
  line-height: 1.8;
  font-size: 0.9rem;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`

const NotFound: React.FunctionComponent = () => {
  return (
    <NotFoundWrapper>
      Hmmm, that doesn&apos;t look like a real page. Let&apos;s get you back to <Link to="/about"> the homepage</Link>.
    </NotFoundWrapper>
  );
};

export default NotFound;
