import Icon1 from "@/public/icon-dumbbell.png";
import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";
import { VscDebugStart } from "react-icons/vsc";
import { LuCrown } from "react-icons/lu";
import { HiStatusOnline } from "react-icons/hi";
import { Bounce, Fade } from "react-awesome-reveal";
function Offer() {
  return (
    <section className="bg-dark pt-10 pb-10" id="oferta">
      <div>
        <Fade triggerOnce>
          <h2 className="text-3xl uppercase font-semibold text-center text-(--color-background) mb-20">
            Oferta
          </h2>
        </Fade>
        <Fade triggerOnce>
          <div className="flex justify-between gap-8 px-16 max-xl:px-12 max-xl:gap-6 max-lg:flex-col max-lg:gap-16 max-md:px-4">
            <div
              className="bg-(--color-background) p-8 rounded-3xl w-full flex flex-col justify-between max-xl:px-4"
              id="plan-start"
            >
              <div className="rounded-full w-fit h-auto mx-auto shadow-md -mt-20 z-10 bg-(--color-background)  mb-6 p-4">
                {/* <Image src={Icon1} alt="icon" className="mx-auto p-4 w-full" /> */}
                <VscDebugStart fill="#df7657" className="w-16 h-16" />
              </div>
              <h3 className="uppercase text-xl font-semibold text-center mb-4">
                Plan Start
              </h3>
              <p className=" text-center max-w-[60%] mx-auto max-[1150px]:text-sm max-[1150px]:max-w-[75%] max-lg:text-lg">
                Dla osób, które chcą rozpocząć swoją przygodę z treningiem.
              </p>

              <ul className="text-sm my-6 grid justify-center">
                <li className="flex gap-1 items-center">
                  <span>
                    <IoCheckmark stroke="#df7657" />
                  </span>
                  Indywidualny plan treningowy
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <IoCheckmark stroke="#df7657" />
                  </span>
                  Plan dietetyczny
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <IoCheckmark stroke="#df7657" />
                  </span>
                  Kontakt i wsparcie online
                </li>
              </ul>

              <p className="text-center font-bold text-3xl mt-16">
                299 zł <span className="font-medium text-sm">/ miesiąc</span>
              </p>
              <div className="grid justify-center w-full">
                <Fade delay={500} triggerOnce>
                  <Bounce delay={500} triggerOnce>
                    <button className="mt-6 btn3 font-semibold">
                      Umów Konsultację
                    </button>
                  </Bounce>
                </Fade>
              </div>
            </div>

            <div
              className="text-(--color-background) p-8 border-2 border-(--color-primary) rounded-3xl -mt-6 w-full flex flex-col justify-between max-xl:px-4"
              id="plan-pro"
            >
              <div className="rounded-full w-fit h-auto mx-auto shadow-md -mt-16 z-10 bg-(--color-background)  mb-6 p-4">
                {/* <Image src={Icon1} alt="icon" className="mx-auto p-4 w-full" /> */}
                <LuCrown
                  stroke="#df7657"
                  strokeWidth={2}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="uppercase text-xl font-semibold text-center mb-4">
                Plan Pro
              </h3>
              <p className=" text-center max-w-[60%] mx-auto max-[1150px]:text-sm max-[1150px]:max-w-[75%] max-lg:text-lg">
                Kompleksowa opieka i najlepsze wsparcie w drodze po efekty.
              </p>

              <ul className="text-sm my-6 grid justify-center">
                <li className="flex gap-1 items-center">
                  <span>
                    <IoCheckmark stroke="#df7657" />
                  </span>
                  Indywidualne treningi
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <IoCheckmark stroke="#df7657" />
                  </span>
                  Plan dietetyczny
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <IoCheckmark stroke="#df7657" />
                  </span>
                  Stały kontakt i analiza postępów
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <IoCheckmark stroke="#df7657" />
                  </span>
                  Dostosowanie planu na bieżąco
                </li>
              </ul>

              <p className="text-center font-bold text-3xl mt-16">
                599 zł <span className="font-medium text-sm">/ miesiąc</span>
              </p>
              <div className="grid justify-center w-full">
                <Fade delay={500} triggerOnce>
                  <Bounce delay={500} triggerOnce>
                    <button className="mt-6 btn1 font-semibold">
                      Umów Konsultację
                    </button>
                  </Bounce>
                </Fade>
              </div>
            </div>

            <div
              className="bg-(--color-background) p-8 rounded-3xl w-full flex flex-col justify-between max-xl:px-4"
              id="plan-online"
            >
              <div className="rounded-full w-fit h-auto mx-auto shadow-md -mt-20 z-10 bg-(--color-background)  mb-6 p-4">
                {/* <Image src={Icon1} alt="icon" className="mx-auto p-4 w-full" /> */}
                <HiStatusOnline fill="#df7657" className="w-16 h-16" />
              </div>
              <h3 className="uppercase text-xl font-semibold text-center mb-4">
                Plan Online
              </h3>
              <p className=" text-center max-w-[60%] mx-auto max-[1150px]:text-sm max-[1150px]:max-w-[75%] max-lg:text-lg">
                Pełne prowadzenie online, gdziekolwiek jesteś.
              </p>

              <ul className="text-sm my-6 grid justify-center">
                <li className="flex gap-1 items-center">
                  <span>
                    <IoCheckmark stroke="#df7657" />
                  </span>
                  Plan treningowy (siłownia{" "}
                  <span className="max-[1055px]:hidden max-lg:block">lub</span>{" "}
                  <span className="min-[1055px]:hidden max-lg:hidden">/</span>{" "}
                  dom)
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <IoCheckmark stroke="#df7657" />
                  </span>
                  Plan dietetyczny
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <IoCheckmark stroke="#df7657" />
                  </span>
                  Cotygodniowa analiza postępów
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <IoCheckmark stroke="#df7657" />
                  </span>
                  Wsparcie i motywacja online
                </li>
              </ul>

              <p className="text-center font-bold text-3xl mt-16">
                399 zł <span className="font-medium text-sm">/ miesiąc</span>
              </p>
              <div className="grid justify-center w-full">
                <Fade delay={500} triggerOnce>
                  <Bounce delay={500} triggerOnce>
                    <button className="mt-6 btn3 font-semibold">
                      Umów Konsultację
                    </button>
                  </Bounce>
                </Fade>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Offer;
