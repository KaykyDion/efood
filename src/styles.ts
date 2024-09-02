import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  textPrimary: "#E66767",
  background: "#FFF8F2",
  textSecondary: "#FFEBD9",
  white: "#FFF",
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.background};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1023px) {
      width: 90%;
    }
  }
`;

export const Button = styled.button`
  background-color: ${colors.textSecondary};
  color: ${colors.textPrimary};
  border: none;
  padding: 4px 0;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
