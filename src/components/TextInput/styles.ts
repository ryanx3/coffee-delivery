import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const TextInputContainer = styled.div`
  ${mixins.fonts.textS}
  background-color: ${({ theme }) => theme.colors["base-input"]};
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors["base-text"]};
  padding: 0.75rem;

  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors["yellow-dark"]};
  }

  > input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }
  }
`;
