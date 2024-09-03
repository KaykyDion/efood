import star from "../../assets/images/star_favorite.svg";
import Restaurant from "../../models/Restaurant";
import {
  Card,
  InfosContainer,
  LinkButton,
  Score,
  Tag,
  TagContainer,
  TitleContainer,
} from "./styles";

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
    <Card>
      <img src={capa} alt={titulo} />
      <InfosContainer>
        <TitleContainer>
          <h3>{titulo}</h3>
          <Score>
            {avaliacao}
            <img src={star} alt="avaliação" />
          </Score>
        </TitleContainer>
        <p>{descricao}</p>
        <LinkButton to={`/restaurant/${id}`}>Saiba mais</LinkButton>
        <TagContainer>
          {destacado && <Tag>Destaque da semana</Tag>}
          <Tag>{tipo}</Tag>
        </TagContainer>
      </InfosContainer>
    </Card>
  );
}
