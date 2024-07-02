import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  max-width: fit-content;

  background-color: ${({ theme }) => theme.colors["base-button"]};
  border-radius: 6px;
  transition: all 0.2s;

  span {
    ${mixins.fonts.textM}
    color: ${({ theme }) => theme.colors["base-title"]};
  }

  button {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.purple};
    background: none;
    transition: all 0.2s;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
    button {
      color: ${({ theme }) => theme.colors["purple-dark"]};
    }
  }
`;
