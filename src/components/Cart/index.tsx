import { useDispatch, useSelector } from "react-redux";
import { CartContainer, OverLay, SideBar } from "./styles";
import { close } from "../../store/reducers/cart";
import { RootReducer } from "../../store";
import hiddenBodyScroll from "../../utils/hiddenOverflow";
import CartItems from "../../containers/CartItems";

export default function Cart() {
  const { isOpen } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  hiddenBodyScroll(isOpen);

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <SideBar>
        <CartItems />
      </SideBar>
      <OverLay onClick={closeCart}></OverLay>
    </CartContainer>
  );
}
