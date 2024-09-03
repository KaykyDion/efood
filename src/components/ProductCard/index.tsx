import { useState } from "react";
import { Button } from "../../styles";
import Modal from "../Modal";
import { AddToCartButton, Card, Infos } from "./styles";
import formatPrice from "../../utils/formatPrice";

type Props = {
  productImg: string;
  title: string;
  description: string;
  portion: string;
  price: number;
};

export default function ProductCard({
  productImg,
  title,
  description,
  portion,
  price,
}: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card>
        <img src={productImg} alt={title} />
        <h3>{title}</h3>
        <p>{description.length > 132 && description.slice(0, 129) + "..."}</p>
        <Button onClick={() => setModalOpen(true)}>Mais detalhes</Button>
      </Card>
      <Modal closeModal={closeModal} modalState={modalOpen}>
        <Infos>
          <img src={productImg} alt={title} />
          <div>
            <h3>{title}</h3>
            <p>
              {description} <br />
              <br /> Serve de: {portion}
            </p>
            <AddToCartButton>
              Adicionar ao carrinho - {formatPrice(price)}
            </AddToCartButton>
          </div>
        </Infos>
      </Modal>
    </>
  );
}
