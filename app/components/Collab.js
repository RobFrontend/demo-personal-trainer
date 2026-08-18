import { Bounce, Fade, Flip } from "react-awesome-reveal";

function Collab() {
  return (
    <section
      className="px-16 py-10 bg-dark text-background max-[1333px]:px-12 max-md:px-4"
      id="wspolpraca"
    >
      <Fade duration={1000} triggerOnce>
        <h2 className="text-3xl uppercase font-semibold text-center px-4">
          Jak wygląda współpraca?
        </h2>
        <p className="border-b-2 w-16 border-(--color-primary) mt-3 mb-8 mx-auto"></p>
        <div className="flex justify-between gap-4 px-8 max-[1333px]:px-0 max-[1250px]:grid max-[1250px]:grid-cols-2 max-[1250px]:justify-items-center max-sm:grid-cols-1">
          <div className="grid justify-items-center p-6 max-w-[320px]">
            <Bounce className="justify-self-start" delay={200} triggerOnce>
              <div className="w-16 h-16 bg-(--color-primary) rounded-full  grid items-center justify-center justify-self-start mb-4 max-[1250px]:mb-2">
                <p className="text-2xl font-bold ">1</p>
              </div>
            </Bounce>

            <h3 className="text-center font-semibold text-lg">
              Bezpłatna konsultacja
            </h3>
            <p className="font-light text-center">
              Poznajemy się, rozmawiamy o Twoich celach i oczekiwaniach.
            </p>
          </div>
          <div className="grid justify-items-center p-6 max-w-[320px]">
            <Bounce className="justify-self-start" delay={400} triggerOnce>
              <div className="w-16 h-16 bg-(--color-primary) rounded-full  grid items-center justify-center justify-self-start mb-4 max-[1250px]:mb-2">
                <p className="text-2xl font-bold ">2</p>
              </div>
            </Bounce>

            <h3 className="text-center font-semibold text-lg">
              Plan działania
            </h3>
            <p className="font-light text-center">
              Otrzymujesz indywidualny plan treningowy i dietetyczny.
            </p>
          </div>
          <div className="grid justify-items-center p-6 max-w-[320px]">
            <Bounce className="justify-self-start" delay={600} triggerOnce>
              <div className="w-16 h-16 bg-(--color-primary) rounded-full  grid items-center justify-center justify-self-start mb-4 max-[1250px]:mb-2">
                <p className="text-2xl font-bold ">3</p>
              </div>
            </Bounce>

            <h3 className="text-center font-semibold text-lg">
              Realizacja i wsparcie
            </h3>
            <p className="font-light text-center">
              Trenujesz, ja Cię wspieram, motywuję i koryguję plan.
            </p>
          </div>
          <div className="grid justify-items-center p-6 max-w-[320px]">
            <Fade className="justify-self-start" delay={800} triggerOnce>
              <Flip className="justify-self-start" delay={800} triggerOnce>
                <div className="w-16 h-16 bg-(--color-primary) rounded-full  grid items-center justify-center justify-self-start mb-4 max-[1250px]:mb-2">
                  <p className="text-2xl font-bold ">4</p>
                </div>
              </Flip>
            </Fade>

            <h3 className="text-center font-semibold text-lg">Efekty</h3>
            <p className="font-light text-center">
              Cieszysz się zmianą sylwetki, lepszym samopoczuciem i pewnością
              siebie!
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Collab;
