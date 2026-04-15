"use client";

import { useState } from "react";
interface SliderProps {
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  speed?: number; // seconds for one full loop, default 30
}

export default function Slider({ images, speed = 30 }: SliderProps) {
  // Duplicate images to create seamless loop
  const doubled = [...images, ...images];
  const [paused, setPaused] = useState(false);
  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="w-full overflow-hidden"
    >
      <div
        className="flex gap-3 w-max animate-slide "
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((img, index) => (
          //   <div
          //     key={index}
          //     className="flex-shrink-0 sm:w-[188px] sm:h-25 w-[100px] h-20"
          //   >
          //     <img
          //       src={img.src}
          //       alt={img.alt}
          //     />
          //   </div>
          <div
            key={index}
            className="flex-shrink-0 sm:w-[188px] sm:h-[100px] w-[100px] h-[80px] gap-3 flex items-center justify-center"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-contain opacity-80 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
