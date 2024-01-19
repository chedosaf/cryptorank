"use client"
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
// add css varibles
}

html,
body {
  background-color: #fff;
  color: #424961;
}
`;

export default GlobalStyles;