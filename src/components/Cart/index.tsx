import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../styles";
import {
  CartContainer,
  CartItem,
  EmptyCartMessage,
  OverLay,
  SideBar,
} from "./styles";
import { close, remove } from "../../store/reducers/cart";
import { RootReducer } from "../../store";
import formatPrice from "../../utils/formatPrice";
import Product from "../../models/Product";
import hiddenBodyScroll from "../../utils/hiddenOverflow";
import generateRandomKey from "../../utils/generateRandomKey";

export default function Cart() {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const removeProduct = (item: Product) => {
    dispatch(remove(item.id));
  };

  const getTotalPrice = () => {
    return formatPrice(items.reduce((acc, item) => (acc += item.preco), 0));
  };

  hiddenBodyScroll(isOpen);

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <SideBar>
        {items.length ? (
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
        ) : (
          <EmptyCartMessage>
            <p>Não há produtos no carrinho</p>
          </EmptyCartMessage>
        )}
      </SideBar>
      <OverLay onClick={closeCart}></OverLay>
    </CartContainer>
  );
}
