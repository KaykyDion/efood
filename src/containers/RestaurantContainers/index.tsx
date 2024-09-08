import RestaurantCard from "../../components/RestaurantCard";
import { Container } from "./styles";

type Props = {
  restaurantList: Restaurant[];
};

export default function RestaurantContainer({ restaurantList }: Props) {
  return (
    <Container>
      {restaurantList.map((r) => (
        <RestaurantCard
          id={r.id}
          capa={r.capa}
          avaliacao={r.avaliacao}
          descricao={r.descricao}
          destacado={r.destacado}
          titulo={r.titulo}
          tipo={r.tipo}
          key={r.id}
        />
      ))}
    </Container>
  );
}
