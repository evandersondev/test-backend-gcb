import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body{
    width: 100%;
    height: 100%;
  }

  body{
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
    color: #333;
    background: #E8D9D4;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export default GlobalStyle;
