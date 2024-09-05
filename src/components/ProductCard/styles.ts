import styled from "styled-components";
import { breakpoints, Button, colors } from "../../styles";

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
    height: 168px;
    object-fit: cover;
  }

  h3 {
    font-weight: 900;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 90%;
  }
`;

export const AddToCartButton = styled(Button)`
  width: 216px;
`;

export const Infos = styled.div`
  display: flex;
  gap: 24px;
  color: ${colors.white};

  @media (max-width: ${breakpoints.tabletLg}) {
    flex-direction: column;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  img {
    height: 280px;
    width: 280px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tabletLg}) {
      width: 100%;
    }

    @media (max-width: ${breakpoints.mobile}) {
      display: none;
    }
  }

  p {
    margin-bottom: 16px;
  }
`;
