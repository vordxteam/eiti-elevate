import { Link } from "react-router-dom";

import { useEffect } from "react";



interface PageHeroProps {

  heading: React.ReactNode;

  description: string;

  buttonLabel?: string;

  buttonLink?: string;

  backgroundImage?: string;

}



const PageHero = ({

  heading,

  description,

  buttonLabel,

  buttonLink,

  backgroundImage,

}: PageHeroProps) => {

  const bgImage = backgroundImage || "/images/hero-home.png";

 

  return (

    <section

      className="relative flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat h-auto py-10 sm:h-screen sm:aspect-auto"

      style={{ backgroundImage: `url(${bgImage})` }}

    > 

      <div className="absolute inset-0 bg-black/70" />



      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center py-20 sm:py-40">

        <h1

          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold leading-[1.1] tracking-tight mb-6"

          style={{

            color: "white",

            textShadow:

              "0 2px 20px rgba(0,0,0,0.3), 0 0 40px rgba(28,166,163,0.2)",

          }}

        >

          {heading}

        </h1>



        <p

          className="text-sm text-center opacity-70 md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"

          style={{

            color: "rgba(255,255,255,0.95)",

            textShadow: "0 1px 10px rgba(0,0,0,0.4)",

          }}

        >

          {description}

        </p>



        {buttonLabel && buttonLink && (

          <div className="flex justify-center">

            {buttonLink.startsWith("#") ? (

              <a

                href={buttonLink}

                className="inline-flex items-center justify-center gap-2 bg-[#1CA6A3] hover:bg-[#179490] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#1CA6A3]/30 hover:-translate-y-0.5 text-lg"

              >

                {buttonLabel}

                <span className="material-symbols-outlined">arrow_forward</span>

              </a>

            ) : (

              <Link

                to={buttonLink}

                className="inline-flex items-center  justify-center gap-2 bg-[#1CA6A3] hover:bg-[#179490]  text-white sm:font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#1CA6A3]/30 hover:-translate-y-0.5 text-lg"

              >

                {buttonLabel}

                <span className="material-symbols-outlined">arrow_forward</span>

              </Link>

            )}

          </div>

        )}

      </div>



      {/* <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0d1f22] to-transparent pointer-events-none" /> */}

    </section>

  );

};



export default PageHero;

