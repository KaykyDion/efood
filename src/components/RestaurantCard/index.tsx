import star from "../../assets/images/star_favorite.svg";
import * as S from "./styles";

export default function RestaurantCard({
  titulo,
  avaliacao,
  capa,
  descricao,
  destacado,
  tipo,
  id,
}: Restaurant) {
  return (
    <S.Card>
      <img src={capa} alt={titulo} />
      <S.InfosContainer>
        <S.TitleContainer>
          <h3>{titulo}</h3>
          <S.Score>
            {avaliacao}
            <img src={star} alt="avaliação" />
          </S.Score>
        </S.TitleContainer>
        <p>{descricao}</p>
        <S.LinkButton
          title={`Clique para saber mais sobre: ${titulo}`}
          to={`/restaurant/${id}`}
        >
          Saiba mais
        </S.LinkButton>
        <S.TagContainer>
          {destacado && <S.Tag>Destaque da semana</S.Tag>}
          <S.Tag>{tipo}</S.Tag>
        </S.TagContainer>
      </S.InfosContainer>
    </S.Card>
  );
}
