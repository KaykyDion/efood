import { Link } from "react-router-dom";
import heroBackground from "../../assets/images/hero-background.svg";
import logoEfood from "../../assets/images/logo-efood.svg";
import { CartButton, HeaderContainer } from "./styles";

export default function Header() {
  return (
    <header style={{ backgroundImage: `url(${heroBackground})` }}>
      <HeaderContainer className="container">
        <Link to="/">Restaurantes</Link>
        <img src={logoEfood} alt="efood" />
        <CartButton>0 produto(s) no carrinho</CartButton>
      </HeaderContainer>
    </header>
  );
}
