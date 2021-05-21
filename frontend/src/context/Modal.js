import { createContext, useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import style from "./modal.module.css";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div onClick={onClose} />
      <div>
        {children}
      </div>
    </div>,
    modalNode
  )
}
