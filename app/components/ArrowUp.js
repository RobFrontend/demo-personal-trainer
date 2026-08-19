"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaArrowUp } from "react-icons/fa";

function ArrowUp() {
  const [isHeight, setIsHeight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 600) {
        setIsHeight(true);
      } else {
        setIsHeight(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHeight]);
  return (
    <button
      className={`${!isHeight ? `hidden` : ""} fixed z-30 bottom-8 right-8 p-2 bg-background shadow-md rounded-full text-primary cursor-pointer`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <Fade>
        <FaArrowUp />
      </Fade>
    </button>
  );
}

export default ArrowUp;
