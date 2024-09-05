import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const HeroContainer = styled.header`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${colors.textPrimary};
  margin-bottom: 80px;

  h1 {
    margin-top: 136px;
    max-width: 540px;
    font-weight: 900;
    line-height: 42px;
    font-size: 36px;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 32px;
      line-height: 36px;
    }
  }
`;
