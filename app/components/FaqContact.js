import ContactBG from "@/public/contactbg.png";
import Image from "next/image";
import { Bounce, Fade } from "react-awesome-reveal";
import { FiMinus, FiPlus } from "react-icons/fi";
import CtaModal from "./CtaModal";
import Faq from "./Faq";

function FaqContact() {
  return (
    <section className="px-16 py-10 max-xl:px-12 max-md:px-4">
      <Fade triggerOnce>
        <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
          <div id="faq">
            <h2 className="text-3xl uppercase font-semibold ">FAQ</h2>
            <p className="border-b-2 w-16 border-(--color-primary) mt-3 mb-6 "></p>
            <Faq />
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
              <CtaModal
                btnclass={"btn4 uppercase font-semibold max-sm:text-sm"}
                btntext={"Umów Konsultację"}
                btnarrow={"→"}
                spanBoolean={true}
              />
            </Bounce>
            <Image
              src={ContactBG}
              alt="Ilustracja Marty w trakcie biegu"
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
