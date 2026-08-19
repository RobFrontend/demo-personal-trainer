"use client";
import { useEffect, useState } from "react";
function Headerreveal({ children }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isWhite, setIsWhite] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
        currentScrollY > 600 ? setIsWhite(true) : setIsWhite(false);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isVisible]);
  return (
    <div
      className={`fixed top-0 left-0 w-full ${isWhite && "bg-background"} transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } z-50`}
    >
      {children}
    </div>
  );
}

export default Headerreveal;
