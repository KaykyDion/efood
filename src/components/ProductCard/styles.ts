import styled from "styled-components";
import { colors } from "../../styles";

export const Card = styled.li`
  max-width: 320px;
  padding: 8px;
  background-color: ${colors.textPrimary};
  color: ${colors.textSecondary};
  display: flex;
  flex-direction: column;
  gap: 8px;

  img {
    width: 100%;
  }

  h3 {
    font-weight: 900;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`;
