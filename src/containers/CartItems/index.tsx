import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { CartItem, EmptyCartMessage } from "./styles";
import generateRandomKey from "../../utils/generateRandomKey";
import formatPrice from "../../utils/formatPrice";
import { remove } from "../../store/reducers/cart";
import Product from "../../models/Product";
import { Button } from "../../styles";

export default function CartItems() {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const removeProduct = (item: Product) => {
    dispatch(remove(item.id));
  };

  const getTotalPrice = () => {
    return formatPrice(items.reduce((acc, item) => (acc += item.preco), 0));
  };

  if (items.length)
    return (
      <>
        <ul>
          {items.map((item) => (
            <CartItem key={generateRandomKey()}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <button onClick={() => removeProduct(item)} />
            </CartItem>
          ))}
        </ul>
        <p>
          Valor total: <span>{getTotalPrice()}</span>
        </p>
        <Button>Continuar com a entrega</Button>
      </>
    );

  return (
    <EmptyCartMessage>
      <p>Não há itens no carrinho!</p>
    </EmptyCartMessage>
  );
}
