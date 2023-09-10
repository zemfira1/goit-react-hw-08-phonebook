import { css } from '@emotion/react';
import { theme } from 'styles/theme';
import paperImg from '../images/paper.png';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    min-height: 100vh;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(${paperImg});
    background-repeat: no-repeat;
    background-size: cover;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    font-size: ${theme.fontSizes.small};
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid ${theme.colors.greyDark};
    border-radius: ${theme.spacing(1)};
    box-shadow: ${theme.shadows.small};
    transition: ${theme.animation.boxShadow};

    &:hover,
    :focus {
      box-shadow: ${theme.shadows.inHover};
    }
  }

  input {
    display: block;
    font-size: ${theme.fontSizes.medium};
    background-color: transparent;
    cursor: pointer;
    border: 1px solid ${theme.colors.greyDark};
    border-radius: ${theme.spacing(1)};
    box-shadow: ${theme.shadows.small};
    transition: ${theme.animation.boxShadow};

    &:hover,
    :focus {
      box-shadow: ${theme.shadows.inHover};
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
