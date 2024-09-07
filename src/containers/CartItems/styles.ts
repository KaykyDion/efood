import styled from "styled-components";

import removeIcon from "../../assets/images/remove-icon.svg";
import { colors } from "../../styles";

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

export const EmptyCartMessage = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
