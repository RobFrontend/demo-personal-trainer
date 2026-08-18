import HeroImage from "@/public/personal-trainer1.png";
import Image from "next/image";
import HeroIcon1 from "@/public/icon-people.png";
import HeroIcon2 from "@/public/icon-star.png";
import HeroIcon3 from "@/public/icon-dumbbell.png";
import HeroIcon4 from "@/public/icon-local.png";
import HeroIcon5 from "@/public/icon-forwomen.png";
import HeroIcon6 from "@/public/icon-afterbreak.png";
import HeroBG from "@/public/herobg.png";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

function Hero() {
  return (
    <>
      <section className="relative overflow-x-hidden">
        <div>
          <Image
            src={HeroBG}
            fill
            loading="lazy"
            objectFit="cover"
            objectPosition="center"
            alt="hero"
            className="-z-10"
          />
          <div className="grid grid-cols-2 pb-12 pt-32 min-h-[85vh] max-[1300px]:pt-16 max-md:grid-cols-1 max-md:pt-24">
            <div className="self-center pl-24 max-w-164 max-[1300px]:pl-12 max-[1100px]:w-140 max-sm:pl-8">
              <h1 className="text-6xl font-bold mb-8 leading-[1.2] text-(--color-dark-light) max-[1180px]:text-5xl max-md:text-4xl max-md:max-w-84 max-md:mb-4">
                Trening, który zmienia nie tylko ciało ale i życie.
              </h1>
              <Fade>
                <div className="max-sm:hidden text-lg max-[1180px]:text-base">
                  <Fade cascade damping={0.01} triggerOnce>
                    Indywidualne podejście, plan dopasowany do Ciebie
                  </Fade>
                </div>
                <div className="sm:hidden text-base">
                  <Fade cascade damping={0.01} triggerOnce>
                    Indywidualne podejście,
                  </Fade>
                </div>
                <div className="sm:hidden text-base">
                  <Fade cascade damping={0.01} delay={200} triggerOnce>
                    plan dopasowany do Ciebie
                  </Fade>
                </div>
                <div className="mb-10 text-lg max-[1180px]:text-base max-md:mb-6">
                  <Fade cascade damping={0.01} delay={400} triggerOnce>
                    i reale efekty, które widać.
                  </Fade>
                </div>
                <Fade delay={200} triggerOnce></Fade>
                <div className="flex justify-between  text-lg max-[1180px]:text-base  max-lg:flex-col max-lg:gap-4 max-lg:w-fit">
                  <button className="btn1 font-semibold">
                    Umów Konsultację <span className="pl-3">→</span>
                  </button>
                  <Link
                    href="#metamorfozy"
                    className="btn2 font-semibold text-lg max-[1180px]:text-base"
                  >
                    Zobacz Metamorfozy
                  </Link>
                </div>
              </Fade>
            </div>
            <div className="self-end justify-self-center">
              <Image
                src={HeroImage}
                alt="Hero Image"
                className="self-end justify-self-center max-[1300px]:h-[90%] max-[1300px]:w-auto max-lg:max-auto max-lg:w-auto max-md:justify-self-end max-md:translate-x-12 max-md:max-h-87"
              />
            </div>
          </div>
          {/* <div className="flex justify-between items-center flex-wrap hero-peach-bar py-8 px-12 rounded-2xl w-[95%] mx-auto absolute -bottom-24 left-1/2 -translate-x-1/2">
          <div className="flex gap-6">
            <Image src={HeroIcon1} alt="icon" className="self-center" />
            <div>
              <p className="font-bold text-4xl">100+</p>
              <p className="text-lg">
                zadowolonych <br></br>podopiecznych
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <Image src={HeroIcon2} alt="icon" className="self-center" />
            <div>
              <p className="font-bold text-4xl">7 lat</p>
              <p className="text-lg">
                doświadczenia <br></br>i wiedzy
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <Image src={HeroIcon3} alt="icon" className="self-center" />
            <div>
              <p className="font-bold text-4xl">1000+</p>
              <p className="text-lg">
                godzin treningów <br></br>indywidualnych
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <Image src={HeroIcon4} alt="icon" className="self-center" />
            <div>
              <p className="font-bold text-4xl">Treningi</p>
              <p className="text-lg">
                stacjonarne w Warszawie <br></br>oraz online
              </p>
            </div>
          </div>
        </div> */}
        </div>
      </section>
      <section className="flex justify-between items-center flex-wrap hero-peach-bar py-8 px-32 rounded-2xl w-[95%] mx-auto -mt-12 z-10 max-2xl:px-24 max-xl:px-16  max-lg:grid max-lg:grid-cols-2 max-md:w-full max-lg:gap-6 max-lg:justify-items-center max-md:px-4">
        <Fade cascade delay={400} duration={500} triggerOnce>
          <div className="flex gap-4 max-2xl:gap-3 max-lg:flex-col">
            <Image
              src={HeroIcon1}
              alt="icon"
              className="self-center max-2xl:w-14 max-2xl:h-14 max-xl:w-12 max-xl:h-12"
            />
            <div>
              <p className="font-bold text-4xl max-2xl:text-3xl max-xl:text-2xl max-lg:text-center">
                100+
              </p>
              <p className="text-lg max-2xl:text-base max-xl:text-sm max-lg:text-center">
                zadowolonych <br></br>podopiecznych
              </p>
            </div>
          </div>

          <div className="flex gap-4 max-2xl:gap-3 max-lg:flex-col">
            <Image
              src={HeroIcon2}
              alt="icon"
              className="self-center max-2xl:w-14 max-2xl:h-14 max-xl:w-12 max-xl:h-12"
            />
            <div>
              <p className="font-bold text-4xl max-2xl:text-3xl max-xl:text-2xl max-lg:text-center">
                7 lat
              </p>
              <p className="text-lg max-2xl:text-base max-xl:text-sm max-lg:text-center">
                doświadczenia <br></br>i wiedzy
              </p>
            </div>
          </div>
          <div className="flex gap-4 max-2xl:gap-3 max-lg:flex-col">
            <Image
              src={HeroIcon3}
              alt="icon"
              className="self-center max-2xl:w-14 max-2xl:h-14 max-xl:w-12 max-xl:h-12"
            />
            <div>
              <p className="font-bold text-4xl max-2xl:text-3xl max-xl:text-2xl max-lg:text-center">
                1000+
              </p>
              <p className="text-lg max-2xl:text-base max-xl:text-sm max-lg:text-center">
                godzin treningów <br></br>indywidualnych
              </p>
            </div>
          </div>
          <div className="flex gap-4 max-2xl:gap-3 max-lg:flex-col">
            <Image
              src={HeroIcon4}
              alt="icon"
              className="self-center max-2xl:w-14 max-2xl:h-14 max-xl:w-12 max-xl:h-12"
            />
            <div>
              <p className="font-bold text-4xl max-2xl:text-3xl max-xl:text-2xl max-lg:text-center">
                Treningi
              </p>
              <p className="text-lg max-2xl:text-base max-xl:text-sm max-lg:text-center">
                stacjonarne w Warszawie <br></br>oraz online
              </p>
            </div>
          </div>
        </Fade>
      </section>
      <section className="mt-12 mb-12">
        <Fade triggerOnce>
          <h2 className="text-center text-3xl font-semibold uppercase">
            Dla kogo jest trening?
          </h2>
          <p className="border-b-2 mx-auto w-16 border-(--color-primary) mt-3"></p>
          <div className="flex justify-between items-start mt-8 px-16 max-xl:px-12 max-lg:grid max-lg:grid-cols-2 max-lg:gap-8 max-md:grid-cols-1">
            <div className="text-center w-[20%] max-lg:w-full max-lg:flex max-lg:items-start max-lg:gap-4 max-lg:text-left">
              <div className="rounded-full mx-auto bg-(--color-cream) w-fit max-lg:h-full max-lg:w-auto max-lg:mx-2">
                <Image src={HeroIcon1} alt="icon" className="mx-auto p-3" />
              </div>
              <div className="max-lg:max-w-[70%]">
                <h3 className="font-semibold mt-3 mb-2">Dla początkujacych</h3>
                <p className="max-xl:text-sm">
                  Pokażę Ci, że trening może być prosty, bezpieczny i dawać
                  świetne efekty.
                </p>
              </div>
            </div>
            <div className="text-center w-[20%] max-lg:w-full max-lg:flex max-lg:items-start max-lg:gap-4 max-lg:text-left">
              <div className="rounded-full mx-auto bg-(--color-cream) w-fit max-lg:h-full max-lg:w-auto max-lg:mx-2">
                <Image src={HeroIcon5} alt="icon" className="mx-auto p-3" />
              </div>
              <div className="max-lg:max-w-[70%]">
                <h3 className="font-semibold mt-3 mb-2">Dla kobiet</h3>
                <p className="max-xl:text-sm">
                  Pomogę Ci zbudowować sylwetkę, pewność siebie i drowe nawyki
                  na lata.
                </p>
              </div>
            </div>
            <div className="text-center w-[20%] max-lg:w-full max-lg:flex max-lg:items-start max-lg:gap-4 max-lg:text-left">
              <div className="rounded-full mx-auto bg-(--color-cream) w-fit max-lg:h-full max-lg:w-auto max-lg:mx-2">
                <Image src={HeroIcon3} alt="icon" className="mx-auto p-3" />
              </div>
              <div className="max-lg:max-w-[70%]">
                <h3 className="font-semibold mt-3 mb-2">Dla zapracowancyh</h3>
                <p className="max-xl:text-sm">
                  Dopasuję plan do Twojego grafiku i nauczę, jak trenować
                  skutecznie i mądrze.
                </p>
              </div>
            </div>
            <div className="text-center w-[20%] max-lg:w-full max-lg:flex max-lg:items-start max-lg:gap-4 max-lg:text-left">
              <div className="rounded-full mx-auto bg-(--color-cream) w-fit max-lg:h-full max-lg:w-auto max-lg:mx-2">
                <Image src={HeroIcon6} alt="icon" className="mx-auto p-3" />
              </div>
              <div className="max-lg:max-w-[70%] ">
                <h3 className="font-semibold mt-3 mb-2">
                  Dla osób po przerwie
                </h3>
                <p className="max-xl:text-sm">
                  Pomogę Ci wrócić do formy krok po kroku, bez presji i
                  kontuzji.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
}

export default Hero;
