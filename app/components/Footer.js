import Link from "next/link";
import LogoIMG from "@/public/personal-logo3.png";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import CtaModal from "./CtaModal";

function Footer() {
  return (
    <footer className="bg-dark text-background/90 text-sm px-16 max-[900px]:px-10">
      <Fade triggerOnce>
        <div className="flex justify-between pt-10 pb-4 max-md:grid max-md:grid-cols-2 max-md:gap-4 max-sm:grid-cols-1">
          <div className="max-md:col-span-full">
            <Link href="#sekcja-glowna">
              <Image src={LogoIMG} alt="logo" className="max-w-48" />
            </Link>
            <div className="flex gap-2 p-1 self-center justify-self-center max-md:justify-self-start">
              <Link
                href="#sekcja-glowna"
                className="text-lg transition-opacity hover:opacity-80"
              >
                <FaInstagram fill="#df7657" />
              </Link>
              <Link
                href="#sekcja-glowna"
                className="text-lg transition-opacity hover:opacity-80"
              >
                <FaFacebook fill="#df7657" />
              </Link>
              <Link
                href="#sekcja-glowna"
                className="text-lg transition-opacity hover:opacity-80"
              >
                <FaTiktok fill="#df7657" />
              </Link>
            </div>
          </div>
          <div>
            <p className="font-semibold mb-3">Nawigacja</p>
            <ul className="flex flex-col gap-1 opacity-90 max-[900px]:text-xs">
              <li>
                <Link href="#omnie">O mnie</Link>
              </li>
              <li>
                <Link href="#oferta">Oferta</Link>
              </li>
              <li>
                <Link href="#metamorfozy">Metamorfozy</Link>
              </li>
              <li>
                <Link href="#wspolpraca">Jak to działa?</Link>
              </li>
              <li>
                <Link href="#opinie">Opinie</Link>
              </li>
              <li>
                <Link href="#faq">FAQ</Link>
              </li>
              <li>
                <Link href="#kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-3">Oferta</p>
            <ul className="flex flex-col opacity-90 gap-1 max-[900px]:text-xs">
              <li>
                <Link href="#plan-start">Plan Start</Link>
              </li>
              <li>
                <Link href="#plan-pro">Plan Pro</Link>
              </li>
              <li>
                <Link href="#plan-online">Plan Online</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-3">Kontakt</p>
            <ul className="flex flex-col opacity-90 mb-4 gap-1 max-[900px]:text-xs">
              <li className="flex gap-1 items-center">
                <MdOutlineEmail fill="#df7657" />
                kontakt@strongbymarta.pl
              </li>
              <li className="flex gap-1 items-center">
                <MdPhone fill="#df7657" />
                +48 789 123 456
              </li>
              <li className="flex gap-1 items-center">
                <IoLocationOutline stroke="#df7657" />
                Warszawa
              </li>
            </ul>
            <CtaModal
              btnclass={"btn1 uppercase font-semibold text-xs"}
              btntext={"Umów Konsultację"}
            />
          </div>
        </div>
        <div className="flex justify-between border-t border-border/20 mx-auto py-4 text-xs max-sm:flex-col-reverse max-sm:gap-1 max-sm:text-center">
          <p>
            &copy; {new Date().getFullYear()} STRONG BY MARTA Wszystkie prawa
            zastrzeżone
          </p>
          <Link href="#sekcja-glowna">Polityka prywatności</Link>
        </div>
      </Fade>
    </footer>
  );
}

export default Footer;
