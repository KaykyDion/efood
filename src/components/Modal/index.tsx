import closeIcon from "../../assets/images/close-icon.svg";
import { CloseBtn, ModalContainer, ModalContent } from "./styles";

type Props = {
  children: JSX.Element;
  modalState: boolean;
  closeModal: () => void;
};

export default function Modal({ children, modalState, closeModal }: Props) {
  return (
    <ModalContainer className={modalState ? "is-open" : ""}>
      <ModalContent className="container">
        {children}
        <CloseBtn onClick={closeModal}>
          <img src={closeIcon} alt="Clique para fechar" />
        </CloseBtn>
      </ModalContent>
      <div onClick={closeModal} className="overlay"></div>
    </ModalContainer>
  );
}
