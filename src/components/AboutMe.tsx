import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div<{ open: boolean }>`
  visibility: ${(props) => props.open ? 'initial' : 'hidden'};
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.8;
  opacity: ${(props) => props.open ? 1 : 0};
  overflow: hidden;
  max-height: ${(props) => props.open ? '100vh' : '0vh'};
  transition: opacity 1s, max-height 2s;

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
      <p>
        I&apos;m a product-driven full-stack web developer and empathetic writer and communicator.
        I am currently working on <a href="https://www.executeprogram.com" target="_blank" rel="nofollow noreferrer"> Execute Program</a> and writing for the <a href="https://stackoverflow.blog/authors/maxpekarsky/" target="_blank" rel="nofollow noreferrer"> StackOverflow blog</a>.
        In the past, I worked on product and engineering teams at <a href="https://www.bonus.ly" target="_blank" rel="nofollow noreferrer"> Bonusl.y</a>, <a href="https://codecademy.com" target="_blank" rel="nofollow noreferrer">Codecademy</a>, <a href="https://indiegogo.com" target="_blank" rel="nofollow noreferrer">Indiegogo</a>, and the <a href="https://www1.nyc.gov/site/opportunity/index.page" target="blank" rel="nofollow noreferrer">NYC Mayor&apos;s Office</a>.
        I attended the <a href="https://recurse.com" target="_blank" rel="nofollow noreferrer">Recurse Center</a> in 2019 and can&apos;t recommend it enough.
      </p>
      <p>
        I am comfortable in <em> JavaScript, Ruby, Node.js, Rails, and React</em>, and always enjoy learning new technologies. In addition to my engineering work, I love being involved with my team&apos;s learning and development, developer experience, and hiring process.
      </p>
      <p>
        When I&apos;m not coding for work, I&apos;m always building the next cool thing. My latest projects are <a href="https://www.gem.fm" target="_blank" rel="nofollow noreferrer"> GemFM</a>, a podcast episode recommendation app, <a href="https://www.hackterms.com" target="_blank" rel="nofollow noreferrer"> Hackterms</a>, the Urban Dictionary for programming terms, and  <a href="https://www.tinylogger.com" target="_blank" rel="nofollow noreferrer"> Tiny Logger</a>, a minimal blogging platform.
      </p>
    </AboutWrapper>
  )
}

export default AboutMe;
