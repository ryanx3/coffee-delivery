import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    border-radius: 6px;
    padding: 0.625rem;
    gap: 0.25rem;
    background-color: ${({ theme }) => theme.colors["purple-light"]};

    svg {
      fill: ${({ theme }) => theme.colors.purple};
    }
  }

  > a {
    background-color: ${({ theme }) => theme.colors["yellow-light"]};
    padding: 0.5rem;
    border-radius: 6px;
    position: relative;

    svg {
      fill: ${({ theme }) => theme.colors["yellow-dark"]};

      &:hover {
      }
    }

    span {
      ${mixins.fonts.textS};
      font-weight: bold;

      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors["yellow-dark"]};

      border-radius: 1000px;

      width: 1.5rem;
      height: 1.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
    }
  }
`;
