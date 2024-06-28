import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const TagContainer = styled.div`
  ${mixins.fonts.tag}

  max-width: fit-content;

  background-color: ${({ theme }) => theme.colors["yellow-light"]};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
`;
