import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans");
  body, div {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Roboto, Tahoma, Helvetica, Arial, sans-serif;
  }
  `;
