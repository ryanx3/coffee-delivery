import styled from "styled-components";

import { mixins } from "../../styles/mixins";

export const SuccessContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-top: 5rem;

  > svg {
    align-self: end;
  }
`;

export const Order = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Info = styled.div`
  border: 2px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})`};
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h2 {
    ${mixins.fonts.titleL};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  span {
    ${mixins.fonts.textL};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;

export const Items = styled.div`
  padding: 40px;
  background-color: white;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    > svg {
      padding: 8px;
      border-radius: 999px;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`;
