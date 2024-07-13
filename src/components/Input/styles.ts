import styled, { css } from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
`
export const InputField = styled.input<{ hasError: boolean }>`
  ${mixins.fonts.textS}
  background-color: ${({ theme }) => theme.colors["base-input"]};
  border: 2px solid ${({ theme }) => theme.colors["base-button"]};
  border-radius: 6px;


  color: ${({ theme }) => theme.colors["base-text"]};
  padding: 0.75rem;
  flex: 1;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.9);
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border: 2px solid red;
    `}

  ${({ hasError }) =>
    !hasError &&
    css`
      &:focus-within {
        border: 2px solid ${({ theme }) => theme.colors["yellow-dark"]};
      }
    `}
`;

export const HelperText = styled.span`
  ${mixins.fonts.textXS}
  font-weight: 400;
  color: red;
  position: absolute;
  bottom: -1rem;
  white-space: nowrap;
`;

export const OptionalText = styled.label`
  position: absolute;
  ${mixins.fonts.textXS}
  color: ${({ theme }) => theme.colors["base-label"]};
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  `;