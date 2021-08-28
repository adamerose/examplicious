import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${({ theme }) => theme.background};
  }

  * {
    border-color: ${({ theme }) => theme.border};
    border-style: solid;
    border-width: 0;
    color: ${({ theme }) => theme.text};
  }

  `;
