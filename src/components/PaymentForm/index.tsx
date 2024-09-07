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
            type="number"
            id="cardNumber"
            labelText="Número do cartão"
            inputSize="228px"
          />
          <InputGroup
            type="number"
            id="cardCode"
            labelText="CVV"
            inputSize="87px"
          />
        </InputRow>
        <InputRow>
          <InputGroup
            type="number"
            id="expiresMonth"
            labelText="Mês de vencimento"
          />
          <InputGroup
            type="number"
            id="expiresYear"
            labelText="Ano de vencimento"
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
