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
      width: 6px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({theme}) => theme.colors.purple};
      border-radius: 5px;
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
