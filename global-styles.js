// global-styles.js
import { css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 38px 0px 100px 0px;
    margin: 0px;
    font-family: helvetica, arial, sans-serif;
    font-size: 14px;
    background-color: #FFD817;
  }

  h1 {
    font-size: 50px;
    margin: 0px 0px 50px 0px;
  }

  h2 {
    font-size: 25px;
    margin: 0px 0px 25px 0px;
  }

  h3 {
    font-size: 20px;
    margin: 0px 0px 20px 0px;
  }

  h4 {
    font-size: 16px;
    margin: 0px 0px 20px 0px;
  }

  p {
    line-height: 1.3;
    margin: 0px 0px 20px 0px;
  }
`;