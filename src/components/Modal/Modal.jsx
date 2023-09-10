import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ModalArea, Wrapper } from './Modal.styled';

//import css from './Modal.module.css';

const modalRootElement = document.querySelector('#modal');
//console.log(modalRootElement);

export const Modal = props => {
  const { children, open, onClose } = props;
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (open) {
      modalRootElement.appendChild(element);
      window.addEventListener('keydown', keyDown);

      return () => {
        modalRootElement.removeChild(element);
        window.removeEventListener('keydown', keyDown);
      };
    }
  });

  const keyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleCheck = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  //return createPortal(props.children, element);
  if (open) {
    return createPortal(
      <Wrapper onClick={handleCheck}>
        <ModalArea>{children}</ModalArea>
      </Wrapper>,
      element
    );
  }

  return null;
};
