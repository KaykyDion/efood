import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button, FormContainer, InputRow } from "../../styles";
import InputGroup from "../InputGroup";
import { setDelivery } from "../../store/reducers/delivery";
import { RootReducer } from "../../store";

type Props = {
  backtoCart: () => void;
  goToPayment: () => void;
};

export default function DeliveryForm({ backtoCart, goToPayment }: Props) {
  const dispatch = useDispatch();
  const { delivery } = useSelector((state: RootReducer) => state.delivery);

  const form = useFormik({
    initialValues: {
      name: delivery ? delivery.reciver : "",
      address: delivery ? delivery.address.description : "",
      city: delivery ? delivery.address.city : "",
      zipCode: delivery ? delivery.address.zipCode : "",
      number: delivery ? delivery.address.number : "",
      complement: delivery ? delivery.address.complement : "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "O campo precisa de ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      address: Yup.string()
        .min(5, "O campo precisa de ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      city: Yup.string()
        .min(5, "O campo precisa de ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      zipCode: Yup.string()
        .min(9, "O campo precisa de ter pelo menos 9 caracteres")
        .required("O campo é obrigatório"),
      number: Yup.number()
        .min(2, "O campo precisa de ter pelo menos 2 caracteres")
        .required("O campo é obrigatório"),
      complement: Yup.string(),
    }),
    onSubmit: () => {
      dispatch(
        setDelivery({
          reciver: form.values.name,
          address: {
            city: form.values.city,
            description: form.values.address,
            number: Number(form.values.number),
            complement: form.values.complement,
            zipCode: form.values.zipCode,
          },
        })
      );
      goToPayment();
    },
  });

  const getError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  return (
    <FormContainer>
      <h2>Entrega</h2>
      <form onSubmit={form.handleSubmit}>
        <InputGroup
          onChange={form.handleChange}
          type="text"
          id="name"
          name="name"
          value={form.values.name}
          $isInvalid={getError("name")}
          labelText="Quem irá receber"
        />
        <InputGroup
          onChange={form.handleChange}
          value={form.values.address}
          type="text"
          id="address"
          name="address"
          $isInvalid={getError("address")}
          labelText="Endereço"
        />
        <InputGroup
          onChange={form.handleChange}
          value={form.values.city}
          type="text"
          id="city"
          name="city"
          $isInvalid={getError("city")}
          labelText="Cidade"
        />
        <InputRow>
          <InputGroup
            onChange={form.handleChange}
            value={form.values.zipCode}
            type="text"
            id="zipCode"
            name="zipCode"
            $isInvalid={getError("zipCode")}
            labelText="CEP"
            mask="99999-999"
          />
          <InputGroup
            onChange={form.handleChange}
            value={String(form.values.number)}
            type="number"
            id="number"
            name="number"
            $isInvalid={getError("number")}
            labelText="Número"
          />
        </InputRow>
        <InputGroup
          onChange={form.handleChange}
          value={form.values.complement}
          type="text"
          id="complement"
          name="complement"
          $isInvalid={getError("complement")}
          labelText="Complemento"
        />
        <Button title="Clique para continuar com o pagamento" type="submit">
          Continuar com o pagamento
        </Button>
        <Button
          onClick={backtoCart}
          title="Clique para voltar para o carrinho"
          type="button"
        >
          Voltar para o carrinho
        </Button>
      </form>
    </FormContainer>
  );
}
