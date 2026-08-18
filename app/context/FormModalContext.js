"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ModalFormContext = createContext();

export function ModalFormProvider({ children }) {
  const [isModal, setIsModal] = useState(false);

  const closeModal = () => {
    setIsModal(false);
  };
  const openModal = () => {
    setIsModal(true);
  };

  return (
    <ModalFormContext.Provider value={{ isModal, closeModal, openModal }}>
      {children}
    </ModalFormContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalFormContext);
}
