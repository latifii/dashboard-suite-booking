import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

type ModalContextType = {
  openName: string;
  close: () => void;
  open: (name: string) => void;
};

type ModalProps = {
  children: ReactNode;
};

type OpenProps = {
  children: ReactNode;
  opens: string;
};

type WindowProps = {
  children: ReactNode;
  name: string;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState<string>("");
  const close = () => setOpenName("");
  const open = (name: string) => setOpenName(name);
  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }: OpenProps) {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("open must be used within a Modal");
  }
  const { open } = context;
  return cloneElement(children as ReactElement, {
    onClick: () => open(opensWindowName),
  });
}

function Window({ children, name }: WindowProps) {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Window must be used within a Modal");
  }
  const { close, openName } = context;
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-screen w-full bg-dark bg-opacity-50 backdrop-blur-sm">
      <div
        ref={ref}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-8 shadow-lg transition-all"
      >
        <button
          onClick={close}
          className="absolute left-2 top-2 rounded-sm p-2 transition-all hover:bg-base-50"
        >
          <HiXMark className="text-gray-500 h-6 w-6" />
        </button>
        <div>
          {cloneElement(children as ReactElement, { onCloseModal: close })}
        </div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
