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
          description={p.description}
          productImg={p.img}
          title={p.title}
          key={p.id}
        />
      ))}
    </Container>
  );
}
