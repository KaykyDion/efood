import { Button } from "../../styles";
import { Card } from "./styles";

type Props = {
  productImg: string;
  title: string;
  description: string;
};

export default function ProductCard({ productImg, title, description }: Props) {
  return (
    <Card>
      <img src={productImg} alt={title} />
      <h3>{title}</h3>
      <p>{description.length > 132 && description.slice(0, 129) + "..."}</p>
      <Button>Mais detalhes</Button>
    </Card>
  );
}
