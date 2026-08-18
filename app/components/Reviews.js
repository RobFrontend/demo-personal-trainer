import { Fade } from "react-awesome-reveal";
import CarouselComp from "./Carousel";

function Reviews() {
  return (
    <section className="px-16 py-10 max-xl:px-12 max-md:px-4" id="opinie">
      <Fade triggerOnce>
        <h2 className="text-3xl uppercase font-semibold text-center px-4">
          Opinie Podopiecznych
        </h2>
        <p className="border-b-2 mx-auto w-16 border-(--color-primary) mt-3"></p>
      </Fade>

      <Fade triggerOnce>
        <CarouselComp />
      </Fade>
    </section>
  );
}

export default Reviews;
