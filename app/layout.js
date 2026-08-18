import { Poppins, Caveat } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";

import Headerreveal from "./components/HeaderReveal";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-caveat",
});

export const metadata = {
  title: "Trener Personalny Warszawa | Marta - Treningi i Metamorfozy",
  description:
    "Trening personalny w Warszawie oraz online dopasowany do Twoich celów i możliwości. Indywidualny plan, wsparcie i skuteczne treningi. Umów bezpłatną konsultację.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${poppins.variable} ${caveat.variable} antialiased`}>
        <Headerreveal>
          <Navigation />
        </Headerreveal>

        {children}
      </body>
    </html>
  );
}
