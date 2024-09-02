import styled from "styled-components";
import { colors } from "../../styles";

export const BannerContainer = styled.div`
  color: ${colors.white};
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 24px;
  padding-bottom: 32px;
  margin-bottom: 56px;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 2;
  }

  h2 {
    font-weight: 100;
    font-size: 32px;
    margin-bottom: 156px;
  }

  h1 {
    font-weight: 900;
  }
`;
