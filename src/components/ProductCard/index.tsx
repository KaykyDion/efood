import { useState } from "react";
import { Button } from "../../styles";
import Modal from "../Modal";
import { AddToCartButton, Card, Infos } from "./styles";
import formatPrice from "../../utils/formatPrice";
import { add, open } from "../../store/reducers/cart";
import Product from "../../models/Product";
import { useDispatch } from "react-redux";
import hiddenBodyScroll from "../../utils/hiddenOverflow";

export default function ProductCard({
  foto,
  nome,
  descricao,
  porcao,
  preco,
  id,
}: Product) {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const addtoCart = (product: Product) => {
    dispatch(add(product));
    dispatch(open());
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  hiddenBodyScroll(modalOpen);

  return (
    <>
      <Card>
        <img src={foto} alt={nome} />
        <h3>{nome}</h3>
        <p>{descricao.length > 132 && descricao.slice(0, 129) + "..."}</p>
        <Button onClick={() => setModalOpen(true)}>Mais detalhes</Button>
      </Card>
      <Modal closeModal={closeModal} modalState={modalOpen}>
        <Infos>
          <img src={foto} alt={nome} />
          <div>
            <h3>{nome}</h3>
            <p>
              {descricao} <br />
              <br /> Serve de: {porcao}
            </p>
            <AddToCartButton
              onClick={() =>
                addtoCart({ nome, descricao, foto, id, porcao, preco })
              }
            >
              Adicionar ao carrinho - {formatPrice(preco)}
            </AddToCartButton>
          </div>
        </Infos>
      </Modal>
    </>
  );
}
