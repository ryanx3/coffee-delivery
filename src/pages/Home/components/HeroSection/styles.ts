import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const HeroContainer = styled.section`
  position: relative;
  padding: 5.75rem 0;

  .hero-bg {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    z-index: -1;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  text-align: left;
  margin-bottom: 4.125rem;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors["base-title"]};
    margin-bottom: 1rem;
  }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-row-gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      border-radius: 50%;
      padding: 0.5rem;
    }

    span {
      ${mixins.fonts.textM}
      color: ${({ theme }) => theme.colors["base-text"]};
    }
  }
`;
