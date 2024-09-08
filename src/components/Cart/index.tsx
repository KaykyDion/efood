import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { close } from "../../store/reducers/cart";
import { RootReducer } from "../../store";
import hiddenBodyScroll from "../../utils/hiddenOverflow";

import * as S from "./styles";
import CartItems from "../../containers/CartItems";
import Checkout from "../Checkout";

export default function Cart() {
  const [finishedCart, setFinishedCart] = useState(false);
  const { isOpen } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  hiddenBodyScroll(isOpen);

  return (
    <S.CartContainer className={isOpen ? "is-open" : ""}>
      <S.SideBar>
        {!finishedCart ? (
          <CartItems goToAddressEdit={() => setFinishedCart(true)} />
        ) : (
          <Checkout backToCart={() => setFinishedCart(false)} />
        )}
      </S.SideBar>
      <S.OverLay onClick={closeCart}></S.OverLay>
    </S.CartContainer>
  );
}
