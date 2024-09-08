import InputMask from "react-input-mask";

import { Container } from "./styles";

export type Props = {
  labelText: string;
  type: string;
  $inputSize?: string;
  id: string;
  mask?: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  name: string;
  $isInvalid?: boolean;
};

export default function InputGroup({
  labelText,
  $inputSize,
  type,
  id,
  mask,
  value,
  name,
  onChange,
  $isInvalid,
}: Props) {
  return (
    <Container $isInvalid={$isInvalid} $inputSize={$inputSize}>
      <label htmlFor={id}>{labelText}</label>
      {mask ? (
        <InputMask
          name={name}
          onChange={onChange}
          mask={mask}
          id={id}
          type={type}
          maskChar={null}
        />
      ) : (
        <input
          name={name}
          onChange={onChange}
          value={value}
          id={id}
          type={type}
        />
      )}
    </Container>
  );
}
