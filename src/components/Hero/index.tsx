import logoEfood from "../../assets/images/logo-efood.svg";
import heroBackground from "../../assets/images/hero-background.svg";
import { HeroContainer } from "./styles";

export default function Hero() {
  return (
    <HeroContainer style={{ backgroundImage: `url(${heroBackground})` }}>
      <img src={logoEfood} alt="efood" />
      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </HeroContainer>
  );
}
