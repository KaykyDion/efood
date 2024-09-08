import { Button, FormContainer } from "../../styles";
import InputGroup from "../InputGroup";
import { InputRow } from "../../styles";

export default function PaymentForm() {
  return (
    <FormContainer>
      <h2>Pagamento - Valor a pagar </h2>
      <form>
        <InputGroup type="text" id="cardName" labelText="Nome no cartão" />
        <InputRow>
          <InputGroup
            type="text"
            id="cardNumber"
            labelText="Número do cartão"
            inputSize="228px"
            mask="9999 9999 9999 9999"
          />
          <InputGroup
            type="text"
            id="cardCode"
            labelText="CVV"
            inputSize="87px"
            mask="999"
          />
        </InputRow>
        <InputRow>
          <InputGroup
            type="text"
            id="expiresMonth"
            labelText="Mês de vencimento"
            mask="99"
          />
          <InputGroup
            type="text"
            id="expiresYear"
            labelText="Ano de vencimento"
            mask="99"
          />
        </InputRow>

        <Button title="Clique para finalizar o pagamento" type="submit">
          Finalizar pagamento
        </Button>
        <Button title="Clique para voltar a edição de endereço" type="button">
          Voltar para a edição de endereço
        </Button>
      </form>
    </FormContainer>
  );
}
