import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  /* Import Google Font */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.typography.fontFamily};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text.primary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: ${theme.typography.weight.bold};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
