import { useDispatch, useSelector } from "react-redux";

import { RootReducer } from "../../store";
import generateRandomKey from "../../utils/generateRandomKey";
import formatPrice from "../../utils/formatPrice";
import { remove } from "../../store/reducers/cart";
import { getTotalPrice } from "../../utils/getTotalPrice";

import * as S from "./styles";
import { Button } from "../../styles";

type Props = {
  goToAddressEdit: () => void;
};

export default function CartItems({ goToAddressEdit }: Props) {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const removeProduct = (item: Product) => {
    dispatch(remove(item.id));
  };

  if (items.length)
    return (
      <>
        <ul>
          {items.map((item) => (
            <S.CartItem key={generateRandomKey()}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <button onClick={() => removeProduct(item)} />
            </S.CartItem>
          ))}
        </ul>
        <p>
          Valor total: <span>{getTotalPrice(items)}</span>
        </p>
        <Button onClick={goToAddressEdit}>Continuar com a entrega</Button>
      </>
    );

  return (
    <S.EmptyCartMessage>
      <p>Não há itens no carrinho!</p>
    </S.EmptyCartMessage>
  );
}
