import styled from "styled-components";
import { colors } from "../../styles";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const ModalContent = styled.div`
  padding: 32px;
  position: relative;
  background-color: ${colors.textPrimary};
  z-index: 2;
`;

export const CloseBtn = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;

  img {
    height: 16px;
  }
`;
