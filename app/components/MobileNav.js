"use client";
import Link from "next/link";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <IoClose className="text-4xl font-semibold cursor-pointer z-90" />
        ) : (
          <CgMenuRightAlt className="text-4xl font-semibold cursor-pointer z-90" />
        )}
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 -z-1 bg-background/95 h-svh w-full">
          <Fade triggerOnce>
            <ul className="flex flex-col justify-center items-center h-full gap-8 px-4 font-semibold text-lg">
              <li className="navLink">
                <Link href="#o-mnie" onClick={() => setIsOpen(!isOpen)}>
                  O mnie
                </Link>
              </li>
              <li className="navLink">
                <Link href="#oferta" onClick={() => setIsOpen(!isOpen)}>
                  Oferta
                </Link>
              </li>
              <li className="navLink">
                <Link href="#metamorfozy" onClick={() => setIsOpen(!isOpen)}>
                  Metamorfozy
                </Link>
              </li>
              <li className="navLink">
                <Link href="#wspolpraca" onClick={() => setIsOpen(!isOpen)}>
                  Jak to działa
                </Link>
              </li>
              <li className="navLink">
                <Link href="#opinie" onClick={() => setIsOpen(!isOpen)}>
                  Opinie
                </Link>
              </li>
              <li className="navLink">
                <Link href="#faq" onClick={() => setIsOpen(!isOpen)}>
                  FAQ
                </Link>
              </li>
              <li className="navLink">
                <Link href="#kontakt" onClick={() => setIsOpen(!isOpen)}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </Fade>
        </div>
      )}
    </>
  );
}

export default MobileNav;
