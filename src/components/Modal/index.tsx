import closeIcon from "../../assets/images/close-icon.svg";

import * as S from "./styles";

type Props = {
  children: JSX.Element;
  modalState: boolean;
  closeModal: () => void;
};

export default function Modal({ children, modalState, closeModal }: Props) {
  return (
    <S.ModalContainer className={modalState ? "is-open" : ""}>
      <S.ModalContent className="container">
        {children}
        <S.CloseBtn onClick={closeModal}>
          <img src={closeIcon} alt="Clique para fechar" />
        </S.CloseBtn>
      </S.ModalContent>
      <div onClick={closeModal} className="overlay"></div>
    </S.ModalContainer>
  );
}
