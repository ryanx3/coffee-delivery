import styled, { keyframes } from "styled-components";
import { mixins } from "../../../../styles/mixins";
import { breakpoints } from "../../../../styles/breakpoints";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const typing = keyframes`
  from {
    width: 1ch;
  }
  to {
    width: 100%;
  }
`;

const blinkCursor = keyframes`
  from {
    border-right-color: transparent;
  }
  to {
    border-right-color: black;
  }
`;

export const HeroContainer = styled.section`
  position: relative;
  padding: 5.75rem 0;

  .hero-bg {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    max-width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${fadeInUp} 1s ease-out forwards;
`;

export const Title = styled.div`
  text-align: left;
  margin-bottom: 4.125rem;
  max-width: 100%;
  word-wrap: break-word;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors["base-title"]};
    margin-bottom: 1rem;
  }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    overflow: hidden;
    white-space: nowrap;
    border-right: 0.15em solid black;
    animation:
      ${typing} 3s steps(60) normal,
      ${blinkCursor} 1s steps(60) infinite normal;
    display: inline-block;
    max-width: fit-content;
  }

  @media (${breakpoints.xl}) {
    margin-bottom: 2.5rem;
    > h1 {
      ${mixins.fonts.titleL}
    }

    > span {
      display: inline;
      ${mixins.fonts.textM}
    }
  }

  @media (${breakpoints.md}) {
    margin-bottom: 1rem;
    > span {
      ${mixins.fonts.textS}
      white-space: normal;
    }
  }

  @media (max-width: 900px) {
    margin-bottom: 1rem;
    > h1 {
      ${mixins.fonts.titleS}
    }
    >span {
      ${mixins.fonts.textXS}
      font-weight: 400;
  }}
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
      white-space: normal;
    }
  }

  @media (${breakpoints.xl}) {
    div {
      gap: 0.5rem;

      span {
        ${mixins.fonts.textS}
      }
    }
  }

  @media (${breakpoints.md}) {
    div {
      span {
        ${mixins.fonts.textXS}
        font-weight: 400;
      }
    }
  }
`;

export const AnimatedImage = styled.img`
  animation: ${fadeInUp} 1s ease-out forwards;
  opacity: 0;

  @media (${breakpoints.xl}) {
    width: 350px;
  }

`;
