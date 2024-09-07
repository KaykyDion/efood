import { Container } from "./styles";

export type Props = {
  labelText: string;
  type: string;
  inputSize?: string;
  id: string;
};

export default function InputGroup({ labelText, inputSize, type, id }: Props) {
  return (
    <Container inputSize={inputSize}>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} type={type} />
    </Container>
  );
}
