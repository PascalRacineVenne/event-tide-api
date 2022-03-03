import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    ${'' /* background-color: var(--navy);
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl); */}
    line-height: 1.3;
  }
  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    ${'' /* color: var(--lightest-slate); */}
    line-height: 1.1;
  }
  
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }
  input, textarea {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
  p {
    margin: 0 0 15px 0;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
    }
  }
`;

export default GlobalStyle;