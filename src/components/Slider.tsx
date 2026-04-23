"use client";



import { useState } from "react";



interface SliderProps {

  images: {

    src: string;

    alt: string;

    width: number;

    height: number;

  }[];

  speed?: number;

}



export default function Slider({ images, speed = 30 }: SliderProps) {

  const doubled = [...images, ...images];

  const [paused, setPaused] = useState(false);



  return (

    <div

      onMouseEnter={() => setPaused(true)}

      onMouseLeave={() => setPaused(false)}

      className="relative w-full overflow-hidden"

    >

      {/* Left fade */}

      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-white to-transparent" />



      {/* Right fade */}

      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-white to-transparent" />



      <div

        className="flex w-max animate-slide"

        style={{

          animationDuration: `${speed}s`,

          animationPlayState: paused ? "paused" : "running",

        }}

      >

        {doubled.map((img, index) => (

          <div

            key={index}

            className="flex-shrink-0 sm:w-[188px] sm:h-[100px] w-[100px] h-[80px] flex items-center justify-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5"

          >

            <img

              src={img.src}

              alt={img.alt}

              className="

                w-full h-full object-contain

                transition-all duration-300

              "

            />

          </div>

        ))}

      </div>

    </div>

  );

}