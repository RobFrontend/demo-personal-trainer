"use client";

import { useModal } from "../context/FormModalContext";

function CtaModal({ btnclass, btntext, btnarrow, spanBoolean }) {
  const { openModal } = useModal();
  return (
    <button
      name={btntext}
      className={`${btnclass} font-semibold`}
      onClick={openModal}
    >
      {btntext}
      {spanBoolean && <span className="pl-3">{btnarrow}</span>}
    </button>
  );
}

export default CtaModal;
