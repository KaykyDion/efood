import ProductCard from "../../components/ProductCard";
import Product from "../../models/Product";
import { Container } from "./styles";

type Props = {
  products: Product[];
};

export default function ProductsContainer({ products }: Props) {
  return (
    <Container className="container">
      {products.map((p) => (
        <ProductCard
          price={p.preco}
          portion={p.porcao}
          description={p.descricao}
          productImg={p.foto}
          title={p.nome}
          key={p.id}
        />
      ))}
    </Container>
  );
}
