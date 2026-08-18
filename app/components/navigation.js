"use client";
import Link from "next/link";
import NavLogo from "./NavLogo";
import { Fade } from "react-awesome-reveal";

import MobileNav from "./MobileNav";

function Navigation() {
  return (
    <nav className="flex justify-between px-24 py-4 items-center max-[1300px]:px-8 max-md:px-4">
      <NavLogo />
      <Fade triggerOnce>
        <ul className="flex justify-center gap-8 px-4 font-semibold max-[1300px]:gap-4 max-lg:hidden">
          <li className="navLink">
            <Link href="#o-mnie">O mnie</Link>
          </li>
          <li className="navLink">
            <Link href="#oferta">Oferta</Link>
          </li>
          <li className="navLink">
            <Link href="#metamorfozy">Metamorfozy</Link>
          </li>
          <li className="navLink">
            <Link href="#wspolpraca">Jak to działa</Link>
          </li>
          <li className="navLink">
            <Link href="#opinie">Opinie</Link>
          </li>
          <li className="navLink">
            <Link href="#faq">FAQ</Link>
          </li>
          <li className="navLink">
            <Link href="#kontakt">Kontakt</Link>
          </li>
        </ul>
      </Fade>
      <button className="btn1 font-semibold text-sm max-[1300px]:text-xs max-lg:hidden">
        Umów konsultację <span className="pl-2">→</span>
      </button>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navigation;
