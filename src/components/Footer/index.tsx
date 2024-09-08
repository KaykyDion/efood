import logoEfood from "../../assets/images/logo-efood.svg";
import logoInstagram from "../../assets/images/logo-instagram.svg";
import logoFacebook from "../../assets/images/logo-facebook.svg";
import logoTwitter from "../../assets/images/logo-twitter.svg";

import * as S from "./styles";

export default function Footer() {
  return (
    <S.FooterContainer>
      <img src={logoEfood} alt="efood" />
      <S.SocialLinks>
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
      </S.SocialLinks>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </S.FooterContainer>
  );
}
