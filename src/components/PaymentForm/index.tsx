import { useFormik } from "formik";
import * as Yup from "yup";

import { Button, FormContainer } from "../../styles";
import InputGroup from "../InputGroup";
import { InputRow } from "../../styles";

type Props = {
  backToAddressEdit: () => void;
};

export default function PaymentForm({ backToAddressEdit }: Props) {
  const form = useFormik({
    initialValues: {
      cardName: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(5, "O campo precisa de ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      cardNumber: Yup.string()
        .min(19, "O campo precisa de ter pelo menos 19 caracteres")
        .required("O campo é obrigatório"),
      cardCode: Yup.string()
        .min(3, "O campo precisa de ter pelo menos 3 caracteres")
        .required("O campo é obrigatório"),
      expiresMonth: Yup.string()
        .min(2, "O campo precisa de ter pelo menos 2 caracteres")
        .required("O campo é obrigatório"),
      expiresYear: Yup.string()
        .min(2, "O campo precisa de ter pelo menos 2 caracteres")
        .required("O campo é obrigatório"),
    }),
    onSubmit: () => {},
  });

  const getError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  return (
    <FormContainer>
      <h2>Pagamento - Valor a pagar </h2>
      <form onSubmit={form.handleSubmit}>
        <InputGroup
          onChange={form.handleChange}
          $isInvalid={getError("cardName")}
          value={form.values.cardName}
          type="text"
          id="cardName"
          name="cardName"
          labelText="Nome no cartão"
        />
        <InputRow>
          <InputGroup
            onChange={form.handleChange}
            $isInvalid={getError("cardNumber")}
            value={form.values.cardNumber}
            type="text"
            id="cardNumber"
            name="cardNumber"
            labelText="Número do cartão"
            $inputSize="228px"
            mask="9999 9999 9999 9999"
          />
          <InputGroup
            onChange={form.handleChange}
            $isInvalid={getError("cardCode")}
            value={form.values.cardCode}
            type="text"
            id="cardCode"
            name="cardCode"
            labelText="CVV"
            $inputSize="87px"
            mask="999"
          />
        </InputRow>
        <InputRow>
          <InputGroup
            onChange={form.handleChange}
            $isInvalid={getError("expiresMonth")}
            value={form.values.expiresMonth}
            type="text"
            id="expiresMonth"
            name="expiresMonth"
            labelText="Mês de vencimento"
            mask="99"
          />
          <InputGroup
            onChange={form.handleChange}
            $isInvalid={getError("expiresYear")}
            value={form.values.expiresYear}
            type="text"
            id="expiresYear"
            name="expiresYear"
            labelText="Ano de vencimento"
            mask="99"
          />
        </InputRow>

        <Button title="Clique para finalizar o pagamento" type="submit">
          Finalizar pagamento
        </Button>
        <Button
          onClick={backToAddressEdit}
          title="Clique para voltar a edição de endereço"
          type="button"
        >
          Voltar para a edição de endereço
        </Button>
      </form>
    </FormContainer>
  );
}
