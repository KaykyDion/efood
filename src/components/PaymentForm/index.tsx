import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { RootReducer } from "../../store";
import { clear, close } from "../../store/reducers/cart";
import { getTotalPrice } from "../../utils/getTotalPrice";

import { Button, FormContainer, InputRow } from "../../styles";
import InputGroup from "../InputGroup";
import { usePurchaseMutation } from "../../services/api";
import { SuccessMessage } from "./styles";

type Props = {
  backToAddressEdit: () => void;
  backToCart: () => void;
};

export default function PaymentForm({ backToAddressEdit, backToCart }: Props) {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const { delivery } = useSelector((state: RootReducer) => state.delivery);
  const dispatch = useDispatch();
  const [purchase, { isLoading, data }] = usePurchaseMutation();

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
        .min(4, "O campo precisa de ter pelo menos 4 caracteres")
        .required("O campo é obrigatório"),
    }),
    onSubmit: () => {
      purchase({
        products: items.map((item) => {
          return { id: item.id, price: item.preco };
        }),
        delivery,
        payment: {
          card: {
            name: form.values.cardName,
            number: form.values.cardNumber,
            code: Number(form.values.cardCode),
            expires: {
              month: Number(form.values.expiresMonth),
              year: Number(form.values.expiresYear),
            },
          },
        },
      });
      dispatch(clear());
    },
  });

  const getError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  if (data)
    return (
      <SuccessMessage>
        <h2>Pedido realizado - {data.orderId}</h2>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <Button
          onClick={() => {
            backToCart();
            dispatch(close());
          }}
          title="Clique aqui para concluir o pedido"
        >
          Concluir
        </Button>
      </SuccessMessage>
    );

  return (
    <FormContainer>
      <h2>Pagamento - Valor a pagar {getTotalPrice(items)}</h2>
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
            mask="9999"
          />
        </InputRow>

        <Button
          disabled={isLoading}
          title="Clique para finalizar o pagamento"
          type="submit"
        >
          {isLoading ? "Finalizando pagamento..." : "Finalizar pagamento"}
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
