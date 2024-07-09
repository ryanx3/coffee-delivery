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
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;


  > input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    margin-right: 8px;

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  span {
    
  }
`;
