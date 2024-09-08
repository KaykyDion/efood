import logoEfood from "../../assets/images/logo-efood.svg";
import heroBackground from "../../assets/images/hero-background.svg";

import { HeroContainer } from "./styles";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <HeroContainer style={{ backgroundImage: `url(${heroBackground})` }}>
      <h1 title="efood">
        <Link to="/">
          <img src={logoEfood} alt="efood" />
        </Link>
      </h1>
      <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
    </HeroContainer>
  );
}
