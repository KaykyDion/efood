import logoEfood from "../../assets/images/logo-efood.svg";
import logoInstagram from "../../assets/images/logo-instagram.svg";
import logoFacebook from "../../assets/images/logo-facebook.svg";
import logoTwitter from "../../assets/images/logo-twitter.svg";
import { FooterContainer, SocialLinks } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <img src={logoEfood} alt="efood" />
      <SocialLinks>
        <li>
          <a href="#">
            <img src={logoInstagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={logoFacebook} alt="Faceook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={logoTwitter} alt="Twitter" />
          </a>
        </li>
      </SocialLinks>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </FooterContainer>
  );
}
