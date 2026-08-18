import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Offer from "./components/Offer";
import Transformations from "./components/Transformations";
import Collab from "./components/Collab";
import Reviews from "./components/Reviews";
import FaqContact from "./components/FaqContact";
import Footer from "./components/Footer";
import ModalForm from "./components/ModalForm";
import { useModal } from "./context/FormModalContext";

export default function Home() {
  return (
    <>
      <Hero />
      <ModalForm />
      <Offer />
      <About />
      <Transformations />
      <Collab />
      <Reviews />
      <FaqContact />
      <Footer />
    </>
  );
}
