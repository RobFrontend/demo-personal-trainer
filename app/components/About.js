import Image from "next/image";
import AboutBG from "@/public/aboutbg.png";
import Trainer from "@/public/personal-trainer2.png";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
function About() {
  return (
    <section
      id="o-mnie"
      className=" bg-(--color-cream) py-10 px-16 max-xl:px-12 max-md:px-4"
    >
      <h2 className="text-3xl font-semibold uppercase text-center md:hidden px-4">
        O mnie
      </h2>
      <p className="border-b-2 w-16 border-(--color-primary) mt-3 mb-8 md:hidden mx-auto"></p>
      <div className=" grid grid-cols-2 gap-12 max-xl:gap-8 max-md:grid-cols-1">
        <Fade triggerOnce>
          <div className="relative grid items-end justify-center overflow-hidden rounded-2xl about-img-box h-full">
            <Image
              src={AboutBG}
              alt="about"
              fill
              objectFit="cover"
              objectPosition="center"
              className="-z-10 about-img-bg"
            />
            <Fade delay={250} triggerOnce>
              <Image
                src={Trainer}
                alt="Trainer"
                className="pt-12 px-6 max-h-88 w-auto"
              />
            </Fade>
          </div>
        </Fade>
        <Fade direction="right" duration={500} triggerOnce>
          <div className="py-2 max-md:px-4">
            <h2 className="text-3xl font-semibold uppercase max-md:hidden">
              O mnie
            </h2>
            <p className="border-b-2 w-16 border-(--color-primary) mt-3 mb-8 max-md:hidden"></p>
            <p className="">
              Nazywam się Marta i jestem trenerką personalną z 7-letnim
              doswiadczeniem. Pomogłam już ponad 100 osobom odmienićswoje życie
              poprzez trening i zdrowe nawyki.
            </p>
            <p className="mt-6">
              Wierze, że każdy może osiągnąć swoje cele - potrzebujesz tylko
              odpowiednigo planu, wsparcia i kogoś, kto poprowadzi Cię krok po
              kroku.
            </p>
            <Fade delay={500} triggerOnce>
              <div className="flex pt-10 justify-between max-w-125 items-center max-lg:flex-col max-lg:gap-4">
                <span className="font-signature text-6xl max-[1150px]:text-5xl max-md:self-start">
                  Marta <span className="text-(--color-primary)">♡</span>
                </span>
                <Link href="#metamorfozy" className="btn1 font-semibold">
                  Zobacz Metamorfozy
                </Link>
              </div>
            </Fade>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default About;
