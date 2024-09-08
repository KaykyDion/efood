import { useState } from "react";

import formatPrice from "../../utils/formatPrice";
import { add, open } from "../../store/reducers/cart";
import { useDispatch } from "react-redux";
import hiddenBodyScroll from "../../utils/hiddenOverflow";

import { Button } from "../../styles";
import Modal from "../Modal";
import * as S from "./styles";

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
    closeModal();
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  hiddenBodyScroll(modalOpen);

  return (
    <>
      <S.Card>
        <img src={foto} alt={nome} />
        <h3>{nome}</h3>
        <p>{descricao.length > 132 && descricao.slice(0, 129) + "..."}</p>
        <Button
          title={`Clique para mais detalhes do prato: ${nome}`}
          onClick={() => setModalOpen(true)}
        >
          Mais detalhes
        </Button>
      </S.Card>
      <Modal closeModal={closeModal} modalState={modalOpen}>
        <S.Infos>
          <img src={foto} alt={nome} />
          <div>
            <h3>{nome}</h3>
            <p>
              {descricao} <br />
              <br /> Serve de: {porcao}
            </p>
            <S.AddToCartButton
              onClick={() =>
                addtoCart({ nome, descricao, foto, id, porcao, preco })
              }
            >
              Adicionar ao carrinho - {formatPrice(preco)}
            </S.AddToCartButton>
          </div>
        </S.Infos>
      </Modal>
    </>
  );
}
