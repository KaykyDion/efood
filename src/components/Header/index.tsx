import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import heroBackground from "../../assets/images/hero-background.svg";
import logoEfood from "../../assets/images/logo-efood.svg";

import { open } from "../../store/reducers/cart";
import { RootReducer } from "../../store";

import * as S from "./styles";

export default function Header() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

  return (
    <header style={{ backgroundImage: `url(${heroBackground})` }}>
      <S.HeaderContainer className="container">
        <Link title="Clique aqui para ir para os restaurantes" to="/">
          Restaurantes
        </Link>
        <h1 title="efood">
          <Link to="/">
            <img src={logoEfood} alt="efood" />
          </Link>
        </h1>
        <S.CartButton
          title="Clique aqui para abrir o carrinho"
          onClick={openCart}
        >
          {items.length} produto(s) no carrinho
        </S.CartButton>
      </S.HeaderContainer>
    </header>
  );
}
