import RestaurantCard from "../../components/RestaurantCard";
import Restaurant from "../../models/Restaurant";
import { Container } from "./styles";

type Props = {
  restaurantList: Restaurant[];
};

export default function RestaurantContainer({ restaurantList }: Props) {
  return (
    <Container>
      {restaurantList.map((r) => (
        <RestaurantCard
          img={r.img}
          description={r.description}
          score={r.score}
          tags={r.tags}
          title={r.title}
          id={r.id}
          key={r.id}
        />
      ))}
    </Container>
  );
}
