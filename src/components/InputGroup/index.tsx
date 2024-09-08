import { Container } from "./styles";
import InputMask from "react-input-mask";

export type Props = {
  labelText: string;
  type: string;
  inputSize?: string;
  id: string;
  mask?: string;
};

export default function InputGroup({
  labelText,
  inputSize,
  type,
  id,
  mask,
}: Props) {
  return (
    <Container inputSize={inputSize}>
      <label htmlFor={id}>{labelText}</label>
      {mask ? (
        <InputMask mask={mask} id={id} type={type} />
      ) : (
        <input id={id} type={type} />
      )}
    </Container>
  );
}
