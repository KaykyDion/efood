import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const SideBar = styled.aside`
  background-color: ${colors.textPrimary};
  z-index: 1;
  color: ${colors.textSecondary};
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  height: 100%;
  position: fixed;
  right: 0;
  animation: open 0.3s forwards;

  @keyframes open {
    from {
      right: -200px;
    }
    to {
      right: 0;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }

  > p {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 14px;
    margin-top: 40px;
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const OverLay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;
