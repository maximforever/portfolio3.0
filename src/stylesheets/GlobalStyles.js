import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --base-background-color: #fffbf0;
    --base-text-color:#796c5a;

    --base-background-color-dark-mode: #011c28;
    --base-text-color-dark-mode:#bbdcea;
    --gray-dark: #343434;
    --gray-medium: #c1ac8d;
    --font-serif: "Vollkorn", serif;
    --font-sans-serif: "Montserrat", sans-serif;
    --font-monospace: "Source Code Pro", monospace;
    --orange: #d7ad5d;
    --orange-alt: #43b1df;
    --link-main: #cfcf7d;
    --link-hover: #f98072;

    --transition-time: 0.3s;
  }

  body {
    background: ${({ theme }) =>
      theme.darkMode
        ? "var(--base-background-color-dark-mode)"
        : "var(--base-background-color)"};
    color: ${({ theme }) =>
      theme.darkMode
        ? "var(--base-text-color-dark-mode)"
        : "var(--base-text-color)"};
    font-family: var(--font-sans-serif);

    margin: 0px;
    padding: 0px;
    font-weight: 500;
    transition-property: color, background;
    transition-duration: var(--transition-time);
  }

  a, a:visited, a:active {
    color: ${(theme) =>
      theme.darkMode ? "var(--orange)" : "var(--orange-alt)"};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: var(--link-hover);
    }
  }

  h1, h2, h3, h4,h5, h6 {
    font-weight: 400;
  }
`;

export default GlobalStyles;
