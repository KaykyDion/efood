import { Link } from "react-router-dom";
import heroBackground from "../../assets/images/hero-background.svg";
import logoEfood from "../../assets/images/logo-efood.svg";
import { CartButton, HeaderContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../store/reducers/cart";
import { RootReducer } from "../../store";

export default function Header() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

  return (
    <header style={{ backgroundImage: `url(${heroBackground})` }}>
      <HeaderContainer className="container">
        <Link to="/">Restaurantes</Link>
        <img src={logoEfood} alt="efood" />
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </HeaderContainer>
    </header>
  );
}
