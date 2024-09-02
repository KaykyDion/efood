import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";

export const Card = styled.li`
  max-width: 472px;
  color: ${colors.textPrimary};
  background-color: ${colors.white};
  position: relative;
  border: 1px solid ${colors.textPrimary};

  h3 {
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  img {
    width: 100%;
  }
`;

export const InfosContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    height: 21px;
  }
`;

export const TitleContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkButton = styled(Link)`
  background-color: ${colors.textPrimary};
  color: ${colors.background};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  width: 82px;
  cursor: pointer;
`;

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.span`
  font-size: 12px;
  font-weight: bold;
  background-color: ${colors.textPrimary};
  color: ${colors.background};
  padding: 6px 10px;
`;
