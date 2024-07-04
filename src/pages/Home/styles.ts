import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import * as RadioGroup from "@radix-ui/react-radio-group";

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

interface TagSearchProps {
  variant?: "Tradicionais" | "Gelados";
}

export const TagSearchContainer = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
`;

export const TagSearchButton = styled(RadioGroup.Item)<TagSearchProps>`
  ${mixins.fonts.tag}

  max-width: fit-content;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 100px;
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;

  &:not([data-state="checked"]):hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }

  &[data-state="checked"] {
    transition:
      background-color 0.2s,
      color 0.2s;
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 2.5rem;
  column-gap: 1rem;
`;
