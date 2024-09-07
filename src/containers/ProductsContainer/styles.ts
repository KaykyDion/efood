import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
