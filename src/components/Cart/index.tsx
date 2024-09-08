import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { close } from "../../store/reducers/cart";
import { RootReducer } from "../../store";
import hiddenBodyScroll from "../../utils/hiddenOverflow";

import { CartContainer, OverLay, SideBar } from "./styles";
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
    <CartContainer className={isOpen ? "is-open" : ""}>
      <SideBar>
        {!finishedCart ? (
          <CartItems goToAddressEdit={() => setFinishedCart(true)} />
        ) : (
          <Checkout backToCart={() => setFinishedCart(false)} />
        )}
      </SideBar>
      <OverLay onClick={closeCart}></OverLay>
    </CartContainer>
  );
}
