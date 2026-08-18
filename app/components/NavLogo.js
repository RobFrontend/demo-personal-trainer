"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/personal-logo2.png";
function NavLogo() {
  return (
    <Link href="#sekcja-glowna" onClick={() => window.scrollTo({ top: 0 })}>
      <Image
        className="max-h-12 w-auto max-[1300px]:max-h-10"
        src={Logo}
        alt="Logo"
      />
    </Link>
  );
}

export default NavLogo;
