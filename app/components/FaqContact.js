import ContactBG from "@/public/contactbg.png";
import Image from "next/image";
import { Bounce, Fade } from "react-awesome-reveal";
import { FiPlus } from "react-icons/fi";

function FaqContact() {
  return (
    <section className="px-16 py-10 max-xl:px-12 max-md:px-4">
      <Fade triggerOnce>
        <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
          <div id="faq">
            <h2 className="text-3xl uppercase font-semibold ">FAQ</h2>
            <p className="border-b-2 w-16 border-(--color-primary) mt-3 mb-6 "></p>
            <div className="flex flex-col gap-2">
              <Fade cascade triggerOnce duration={500}>
                <div className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300">
                  <h3 className="font-medium max-sm:text-sm">
                    Czy muszę mieć doświadczenie w treningach?
                  </h3>
                  <FiPlus />
                </div>
                <div className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300">
                  <h3 className="font-medium max-sm:text-sm">
                    Czy oferujesz treningi tylko stacjonarne?
                  </h3>
                  <FiPlus />
                </div>
                <div className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300">
                  <h3 className="font-medium max-sm:text-sm">
                    Jak długo trwa współpraca?
                  </h3>
                  <FiPlus />
                </div>
                <div className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300">
                  <h3 className="font-medium max-sm:text-sm">
                    Czy plan dietetyczny jest obowiązkowy?
                  </h3>
                  <FiPlus />
                </div>
              </Fade>
            </div>
          </div>
          <div
            className="bg-primary/85 rounded-xl px-8 py-10 relative"
            id="kontakt"
          >
            <h2 className="text-3xl uppercase font-semibold text-background mb-4">
              Gotowa na zmianę?
            </h2>
            <p className="mb-5 max-w-75">
              Umów się na bezpłatną konsultację i zobacz, co możemy razem
              osiągnąć!
            </p>
            <Bounce delay={500} triggerOnce>
              <button className="btn4 uppercase font-semibold max-sm:text-sm">
                Umów Konsultację <span className="pl-2">→</span>
              </button>
            </Bounce>
            <Image
              src={ContactBG}
              alt="contact"
              fill
              objectFit="contain"
              className="-z-10 object-bottom-right"
            />
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default FaqContact;
