"use client";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FiMinus, FiPlus } from "react-icons/fi";

function Faq() {
  const [isShow, setIsShow] = useState(0);
  return (
    <div className="flex flex-col gap-2">
      <Fade cascade triggerOnce duration={500}>
        <div>
          <div
            className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
            onClick={() => {
              isShow !== 1 ? setIsShow(1) : setIsShow(0);
            }}
          >
            <h3 className="font-medium max-sm:text-sm">
              Czy muszę mieć doświadczenie w treningach?
            </h3>
            {isShow !== 1 ? <FiPlus /> : <FiMinus />}
          </div>
          {isShow === 1 && (
            <div className="px-4 ">
              <Fade>
                <p>
                  Nie. Treningi są dopasowane do Twojego aktualnego poziomu,
                  możliwości i celu. Jeśli dopiero zaczynasz, nauczę Cię
                  prawidłowej techniki i krok po kroku wprowadzę w trening.
                </p>
              </Fade>
            </div>
          )}
        </div>
        <div>
          <div
            className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
            onClick={() => {
              isShow !== 2 ? setIsShow(2) : setIsShow(0);
            }}
          >
            <h3 className="font-medium max-sm:text-sm">
              Czy oferujesz treningi tylko stacjonarne?
            </h3>
            {isShow !== 2 ? <FiPlus /> : <FiMinus />}
          </div>
          {isShow === 2 && (
            <div className="px-4 ">
              <Fade>
                <p>
                  Nie. Możesz trenować ze mną stacjonarnie w Warszawie lub
                  skorzystać ze współpracy online. W obu przypadkach otrzymujesz
                  indywidualne podejście i plan dopasowany do Twoich potrzeb.
                </p>
              </Fade>
            </div>
          )}
        </div>
        <div>
          <div
            className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
            onClick={() => {
              isShow !== 3 ? setIsShow(3) : setIsShow(0);
            }}
          >
            <h3 className="font-medium max-sm:text-sm">
              Jak długo trwa współpraca?
            </h3>
            {isShow !== 3 ? <FiPlus /> : <FiMinus />}
          </div>
          {isShow === 3 && (
            <div className="px-4 ">
              <Fade>
                <p>
                  To zależy od Twojego celu i punktu startowego. Możemy pracować
                  zarówno krótkoterminowo nad konkretnym celem, jak i prowadzić
                  dłuższą współpracę nastawioną na trwałą zmianę sylwetki,
                  sprawności i nawyków.
                </p>
              </Fade>
            </div>
          )}
        </div>
        <div>
          <div
            className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
            onClick={() => {
              isShow !== 4 ? setIsShow(4) : setIsShow(0);
            }}
          >
            <h3 className="font-medium max-sm:text-sm">
              Czy plan dietetyczny jest obowiązkowy?
            </h3>
            {isShow !== 4 ? <FiPlus /> : <FiMinus />}
          </div>
          {isShow === 4 && (
            <div className="px-4">
              <Fade>
                <p>
                  Nie. Dieta może wspierać osiąganie efektów, ale nie jest
                  warunkiem rozpoczęcia współpracy. Zakres wsparcia żywieniowego
                  dopasujemy do Twojego celu, potrzeb i stylu życia.
                </p>
              </Fade>
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
}

export default Faq;
