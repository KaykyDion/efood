import styled from "styled-components";
import { colors } from "../../styles";
import removeIcon from "../../assets/images/remove-icon.svg";

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

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.textSecondary};
  color: ${colors.textPrimary};
  padding: 8px 8px 12px 8px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
  }

  span {
    font-size: 14px;
  }

  button {
    background-image: url(${removeIcon});
    border: none;
    background-color: transparent;
    height: 16px;
    width: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`;

export const SideBar = styled.aside`
  background-color: ${colors.textPrimary};
  z-index: 1;
  color: ${colors.textSecondary};
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

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
