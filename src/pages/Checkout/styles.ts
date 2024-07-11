import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { breakpoints } from "../../styles/breakpoints";
import { Link } from "react-router-dom";

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (${breakpoints.lg}) {
    display: flex;
    flex-direction: column;
  }
`;

export const FormContainer = styled.section``;
export const CartContainer = styled.aside``;

export const Title = styled.h2`
  ${mixins.fonts.titleXS}
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;

interface HeadingProps {
  variant?: "address" | "payment";
}

export const Heading = styled.div<HeadingProps>`
  display: flex;
  gap: 0.25rem;

  div {
    span {
      ${mixins.fonts.textM}
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }

    p {
      ${mixins.fonts.textS}
      color: ${({ theme }) => theme.colors["base-text"]};
    }
  }

  svg {
    font-size: 22px;
    fill: ${(props) =>
      props.variant === "address"
        ? props.theme.colors["yellow-dark"]
        : props.theme.colors.purple};
  }
`;

export const AddressContainer = styled.div`
  background-color: ${({ theme }) => theme.colors["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (${breakpoints.sm}) {
    padding: 1rem;
    gap: 1rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 16px;
    width: 100%;
  }

  .cep,
  .neighborhood,
  .number {
    min-width: 12.5rem;
    width: 12.5rem;
  }

  .uf {
    width: 6.25rem;
  }

  > span {
    color: red;
    ${mixins.fonts.textS}
  }
`;

export const PaymentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  white-space: nowrap;

  @media (${breakpoints.sm}) {
    padding: 1rem;
    gap: 1rem;
  }
`;

export const PaymentType = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface PaymentTypeButtonProps {
  variant: "credit-card" | "debit-card" | "pix";
}
export const PaymentTypeButton = styled(
  RadioGroup.Item
)<PaymentTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 11rem;
  padding: 1rem;

  border-radius: 6px;
  gap: 12px;

  background-color: ${({ theme }) => theme.colors["base-button"]};
  transition: background-color 0.2s ease;

  > span {
    ${mixins.fonts.buttonM}
    text-transform: uppercase;
  }

  > svg {
    fill: ${({ theme }) => theme.colors.purple};
    font-size: 16px;
  }

  &[data-state="checked"] {
    transition: background-color 0.2s;
    background-color: ${({ theme }) => theme.colors["purple-light"]};
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }

  &:not([data-state="checked"]):hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
    > svg {
      fill: ${({ theme }) => theme.colors["purple-dark"]};
    }
  }

  @media (${breakpoints.sm}) {
    padding: 1rem 0.5rem;
    gap: 4px;
  }
  @media (${breakpoints.xs}) {
    svg {
      display: none;
    }
  }
`;

export const CartContent = styled.div`
  position: relative;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 44px;

  .scroll-coffee {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-height: 336px !important;
    overflow-y: scroll;
  }

  @media (${breakpoints.sm}) {
    padding: 1rem;
    gap: 0.75rem;
  }
`;

export const CoffeeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
  padding-bottom: 1.5rem;


  div:nth-child(1) {
    display: flex;
    align-items: center;
  }

  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    margin-right: 1.25rem;
  }

  .coffee-price {
    align-self: flex-start;
    ${mixins.fonts.textM}
    font-weight: bold;
    white-space: nowrap;
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  > span {
    ${mixins.fonts.textM}
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    align-self: start;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  border-radius: 6px;
  gap: 4px;

  background-color: ${({ theme }) => theme.colors["base-button"]};
  padding: 0.5rem;
  transition: background-color 0.2s ease;

  > span {
    ${mixins.fonts.buttonM}
    text-transform: uppercase;
  }
  > svg {
    fill: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
    > svg {
      fill: ${({ theme }) => theme.colors["purple-dark"]};
    }
  }
`;

export const CartTotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${mixins.fonts.textS};
    }

    span:last-child {
      ${mixins.fonts.textM};
    }
  }

  div:last-child {
    span {
      ${mixins.fonts.textL};
      font-weight: bold;
    }
  }
`;

export const CheckoutButton = styled.button`
  ${mixins.fonts.buttonG}
  text-transform: uppercase;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  padding: 0.75rem 0;
  text-align: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  &:disabled {
    filter: brightness(0.9);
    cursor: not-allowed;
  }
`;

export const EmptyCart = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-decoration: none;
  &:visited {
    color: inherit;
  }

  > p {
    ${mixins.fonts.titleXS}
  }

  > svg {
    fill: ${({ theme }) => theme.colors.purple};
  }
`;
