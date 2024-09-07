import { Button, FormContainer, InputRow } from "../../styles";
import InputGroup from "../InputGroup";

export default function DeliveryForm() {
  return (
    <FormContainer>
      <h2>Entrega</h2>
      <form>
        <InputGroup type="text" id="reciver" labelText="Quem irá receber" />
        <InputGroup type="text" id="address" labelText="Endereço" />
        <InputGroup type="text" id="city" labelText="Cidade" />
        <InputRow>
          <InputGroup type="text" id="zipCode" labelText="CEP" />
          <InputGroup type="text" id="number" labelText="Número" />
        </InputRow>
        <InputGroup type="text" id="complement" labelText="Complemento" />
        <Button title="Clique para continuar com o pagamento" type="submit">
          Continuar com o pagamento
        </Button>
        <Button title="Clique para voltar para o carrinho" type="button">
          Voltar para o carrinho
        </Button>
      </form>
    </FormContainer>
  );
}
