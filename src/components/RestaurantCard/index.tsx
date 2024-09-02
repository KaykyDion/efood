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
  img,
  title,
  score,
  description,
  tags,
}: Restaurant) {
  return (
    <Card>
      <img src={img} alt={title} />
      <InfosContainer>
        <TitleContainer>
          <h3>{title}</h3>
          <Score>
            {score}
            <img src={star} alt="avaliação" />
          </Score>
        </TitleContainer>
        <p>{description}</p>
        <LinkButton>Saiba mais</LinkButton>
        <TagContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
      </InfosContainer>
    </Card>
  );
}
