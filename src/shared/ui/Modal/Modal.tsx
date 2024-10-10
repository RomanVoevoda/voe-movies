import { FC, ReactNode } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  onClick?: () => void;
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ children, onClick }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      onClick?.();
    }
  };

  return (
    <div
      className={styles.modal}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal={true}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default Modal;
