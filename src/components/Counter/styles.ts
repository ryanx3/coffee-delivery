import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  background-color: ${({ theme }) => theme.colors["base-button"]};
  border-radius: 6px;
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

    &:hover {
      color: ${({ theme }) => theme.colors["purple-dark"]};
    }
  }
`;