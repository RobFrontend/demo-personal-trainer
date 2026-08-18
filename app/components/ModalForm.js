"use client";

import { IoClose } from "react-icons/io5";
import { useModal } from "../context/FormModalContext";

function ModalForm() {
  const { isModal, closeModal } = useModal();

  if (isModal)
    return (
      <form className="fixed top-1/2 left-1/2 -translate-1/2 px-8 pt-16 pb-8 bg-cream z-20 rounded-2xl shadow-sm min-w-150 max-md:min-w-3/4 max-sm:px-4 max-sm:pt-10 max-sm:pb-6">
        <div>
          <h2 className="font-semibold text-xl ">Formularz kontaktowy</h2>
          <div className="px-2 py-4 flex flex-col gap-4 max-md:text-sm">
            <input
              className="bg-background rounded-md w-full px-2 py-1"
              placeholder="Imię i Nazwisko / Nazwa Firmy*"
              required
            />
            <input
              className="bg-background rounded-md w-full px-2 py-1"
              placeholder="E-mail*"
              required
            />
            <select
              required
              className="bg-background rounded-md w-full px-2 py-1"
            >
              <option>Wybierz temat*</option>
              <option>Pakiet Start</option>
              <option>Pakiet Pro</option>
              <option>Pakiet Online</option>
              <option>Konsultacja Trening/Dietetyka</option>
              <option>Inny</option>
            </select>
            <textarea
              className="bg-background rounded-md w-full px-2 py-1 min-h-40"
              placeholder="Wiadomość*"
              required
            />
            <button
              type="submit"
              className="btn1 font-semibold mt-4  max-sm:mt-3"
              onClick={closeModal}
            >
              Wyślij wiadomość
            </button>
          </div>
        </div>
        <button onClick={closeModal} className="absolute right-3 top-2">
          <IoClose className="text-3xl cursor-pointer max-sm:text-2xl" />
        </button>
      </form>
    );
}

export default ModalForm;
