import { createGlobalStyle } from "styled-components";

export const colors = {
  textPrimary: "#E66767",
  background: "#FFF8F2",
  footerBackground: "#FFEBD9",
  white: "#FFF",
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
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
