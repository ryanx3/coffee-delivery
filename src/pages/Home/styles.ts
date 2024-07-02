import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HomeContainer = styled.main``;

export const ContentSection = styled.section`
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 2rem 0 3.375rem;

    h2 {
      ${mixins.fonts.titleL}
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 5.8rem;
  grid-column-gap: 5.3rem;
`;
