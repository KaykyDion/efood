import styled from "styled-components";
import { colors } from "../../styles";

export const FooterContainer = styled.footer`
  background-color: ${colors.textSecondary};
  padding: 40px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;

  p {
    font-size: 10px;
    color: ${colors.textPrimary};
    max-width: 480px;
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
  margin-top: 32px;

  img {
    height: 24px;
  }
`;
