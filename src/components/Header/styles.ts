import styled from "styled-components";
import { colors } from "../../styles";

export const HeaderContainer = styled.header`
  padding: 64px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  * {
    color: ${colors.textPrimary};
    font-weight: 900;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const CartButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
