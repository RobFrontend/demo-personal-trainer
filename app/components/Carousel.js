"use client";

import { useState } from "react";
import { reviews } from "../API/reviews";
import { IoStar } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

function CarouselComp() {
  const data = reviews;

  const [isMoved, setIsMoved] = useState(0);

  return (
    <>
      <div className="overflow-x-hidden max-sm:overflow-x-scroll scrollbar-none">
        <div
          className="grid grid-cols-9 gap-4 pt-8 w-[300%] max-lg:w-[450%] max-sm:w-[800%] pb-2 px-2 transition-all duration-300"
          style={{ transform: `translateX(-${isMoved}%)` }}
        >
          <Fade triggerOnce>
            {data.map((rev) => (
              <div key={rev.id} className="h-full">
                <div className="shadow-md p-6 rounded-xl h-full flex flex-col justify-between">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: rev.stars }).map((_, index) => (
                      <span key={index}>
                        <IoStar
                          fill="#df7657"
                          stroke="#000"
                          className="max-md:text-sm"
                        />
                      </span>
                    ))}
                  </div>

                  <p className="max-md:text-sm">{rev.comment}</p>
                  <div className="flex gap-3 items-center pt-3">
                    <Image
                      src={rev.image}
                      alt={rev.name}
                      width={42}
                      height={42}
                      className="rounded-full max-md:w-8 max-md:h-8"
                    />
                    <p className="font-semibold self-end max-md:text-sm">
                      {rev.name}, {rev.age}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
      <Fade triggerOnce>
        <div className="flex gap-3 justify-center items-center pt-4 max-lg:hidden">
          <button
            onClick={() => setIsMoved(0)}
            className="p-2 rounded-full cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: `${isMoved === 0 ? "#df7657" : "#b4b7b9"}`,
            }}
          ></button>
          <button
            onClick={() => setIsMoved(33.3)}
            className="p-2 rounded-full cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: `${isMoved === 33.3 ? "#df7657" : "#b4b7b9"}`,
            }}
          ></button>
          <button
            onClick={() => setIsMoved(66.6)}
            className="p-2 rounded-full cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: `${isMoved === 66.6 ? "#df7657" : "#b4b7b9"}`,
            }}
          ></button>
        </div>
        {/*  */}
        <div className="flex gap-3 justify-center items-center pt-4 lg:hidden max-sm:hidden">
          <button
            onClick={() => setIsMoved(0)}
            className="p-2 rounded-full cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: `${isMoved === 0 ? "#df7657" : "#b4b7b9"}`,
            }}
          ></button>
          <button
            onClick={() => setIsMoved(22.2)}
            className="p-2 rounded-full cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: `${isMoved === 22.2 ? "#df7657" : "#b4b7b9"}`,
            }}
          ></button>
          <button
            onClick={() => setIsMoved(44.4)}
            className="p-2 rounded-full cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: `${isMoved === 44.4 ? "#df7657" : "#b4b7b9"}`,
            }}
          ></button>
          <button
            onClick={() => setIsMoved(66.6)}
            className="p-2 rounded-full cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: `${isMoved === 66.6 ? "#df7657" : "#b4b7b9"}`,
            }}
          ></button>
          <button
            onClick={() => setIsMoved(88.8)}
            className="p-2 rounded-full cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: `${isMoved === 88.8 ? "#df7657" : "#b4b7b9"}`,
            }}
          ></button>
        </div>
      </Fade>
    </>
  );
}

export default CarouselComp;
