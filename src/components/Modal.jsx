import { useEffect } from "react";
import styled from "styled-components";

function Modal({
  isOpen,
  onClose,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  children,
}) {
  const handleOverlayClick = (e) => {
    // Vérifie si on a cliqué directement sur l'overlay (et non sur son contenu)
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose} aria-label="Fermer la modale">
          ×
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  color: #666;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #000;
    background-color: #f5f5f5;
  }
`;
