import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CardContainer = styled.article`
  max-width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 0.8rem 1.5rem;
  gap: 1rem;

  border-radius: 6px 36px;

  background-color: ${({ theme }) => theme.colors["base-card"]};
`;

export const Image = styled.img`
  margin-top: -2rem;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Title = styled.h3`
  ${mixins.fonts.titleS}
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;

export const Description = styled.p`
  ${mixins.fonts.textS}
  color: ${({ theme }) => theme.colors["base-label"]};
`;

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  .buy-content {
    display: flex;
    gap: 0.5rem;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors["base-text"]};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;

export const ButtonCart = styled.button`
    display: flex;

    background-color: ${({ theme }) => theme.colors["purple-dark"]};
    border-radius: 6px;
    padding: 0.5rem;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
    }
    > svg {
      fill: ${({ theme }) => theme.colors.white};
    }
`;