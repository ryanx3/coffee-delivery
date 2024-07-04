import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const AppLayoutContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;


  @media (${breakpoints.xl}) {
    padding: 0 1.25rem;
  }
`;
