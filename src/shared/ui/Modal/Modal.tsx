import { FC, ReactNode } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  onClick?: () => void;
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ children, onClick }) => {
  return (
    <div
      className={styles.modal}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Modal;
