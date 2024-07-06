import { createGlobalStyle } from "styled-components";
import { mixins } from "./mixins";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    ::-webkit-scrollbar {
      width: 15px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
       background: linear-gradient(to right, transparent 50%, ${({ theme }) => theme.colors.purple} 50%);
      bottom: 0;
    }

  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
     ${mixins.fonts.textM};
  }

 button, a {
  
    cursor: pointer;
    text-decoration: none;
    border: none;
 
  }
`;
