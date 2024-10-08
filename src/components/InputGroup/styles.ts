import styled from "styled-components";
import { colors } from "../../styles";
import { Props } from ".";

export const Container = styled.div<
  Omit<
    Props,
    "labelText" | "type" | "id" | "mask" | "onChange" | "value" | "name"
  >
>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 14px;

  label {
    color: ${colors.textSecondary};
    font-weight: bold;
  }

  input {
    padding: 8px;
    height: 32px;
    background-color: ${colors.textSecondary};
    color: ${colors.black};
    max-width: ${(props) => (props.$inputSize ? props.$inputSize : "100%")};
    width: 100%;
    border: 2px solid
      ${(props) => (props.$isInvalid ? "#d11b17" : colors.textSecondary)};
    font-weight: bold;
    font-size: 14px;
  }
`;
