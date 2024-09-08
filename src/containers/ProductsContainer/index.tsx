import ProductCard from "../../components/ProductCard";
import { Container } from "./styles";

type Props = {
  products: Product[];
};

export default function ProductsContainer({ products }: Props) {
  return (
    <Container className="container">
      {products.map((p) => (
        <ProductCard
          preco={p.preco}
          porcao={p.porcao}
          descricao={p.descricao}
          foto={p.foto}
          nome={p.nome}
          id={p.id}
          key={p.id}
        />
      ))}
    </Container>
  );
}
