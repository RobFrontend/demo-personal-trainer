import Image from "next/image";
import Tran1 from "@/public/trans1.png";
import Tran2 from "@/public/trans2.png";
import Tran3 from "@/public/trans3.png";
import Tran4 from "@/public/trans4.png";
import { Bounce, Fade } from "react-awesome-reveal";
import Link from "next/link";

function Transformations() {
  return (
    <section className="py-10 px-16" id="metamorfozy">
      <Fade triggerOnce>
        <h2 className="text-3xl uppercase font-semibold text-center px-4">
          Metamorfozy
        </h2>
      </Fade>
      <p className="border-b-2 w-16 border-(--color-primary) mt-3 mb-8 mx-auto"></p>
      <div className="flex justify-center gap-6 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:justify-items-center">
        <Fade cascade delay={200} duration={500} triggerOnce>
          <div className=" bg-(--color-cream) p-6 rounded-xl max-lg:rounded-md">
            <Image
              src={Tran1}
              alt="metamorfoza"
              className="rounded-md max-h-62.5 w-auto max-lg:rounded-sm"
              quality={100}
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-center mt-2">-12 kg</h3>
            <p className="text-center">6 miesięcy</p>
          </div>
          <div className=" bg-(--color-cream) p-6 rounded-xl max-lg:rounded-md">
            <Image
              src={Tran2}
              alt="metamorfoza"
              className="rounded-md max-h-62.5 w-auto max-lg:rounded-sm"
              quality={100}
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-center mt-2">-8 kg</h3>
            <p className="text-center">3 miesięce</p>
          </div>
          <div className=" bg-(--color-cream) p-6 rounded-xl max-lg:rounded-md">
            <Image
              src={Tran3}
              alt="metamorfoza"
              className="rounded-md max-h-62.5 w-auto max-lg:rounded-sm"
              quality={100}
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-center mt-2">-13 kg</h3>
            <p className="text-center">7 miesięcy</p>
          </div>
          <div className=" bg-(--color-cream) p-6 rounded-xl max-lg:rounded-md">
            <Image
              src={Tran4}
              alt="metamorfoza"
              className="rounded-md max-h-62.5 w-auto max-lg:rounded-sm"
              quality={100}
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-center mt-2">-20 kg</h3>
            <p className="text-center">8 miesięcy</p>
          </div>
        </Fade>
      </div>
      <div className="grid  justify-center mt-12 mb-4">
        <Fade triggerOnce>
          <Bounce triggerOnce delay={500}>
            <Link href="#oferta" className="btn3 font-semibold">
              Sprawdź Ofertę
            </Link>
          </Bounce>
        </Fade>
      </div>
    </section>
  );
}

export default Transformations;
