import { createGlobalStyle } from "styled-components";
import { mixins } from "./mixins";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
     ${mixins.fonts.textM};
  }

 button, a {
  
    cursor: pointer;
    text-decoration: none;
    border: none;
    transition: filter 0.1s ease;

    &:hover {
      filter: brightness(1.05);
    }
  }
`;
