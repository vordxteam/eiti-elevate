import { Link } from "react-router-dom";

interface CTAProps {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
}

export default function CTA({
  heading,
  description,
  buttonLabel,
  buttonLink,
}: CTAProps) {
  return (
    <section
      className="py-[100px] sm:px-6 px-4 max-w-[1280px] mx-3 xl:mx-auto rounded-md my-10 sm:my-20 text-white
      bg-[url('/images/cta-bg.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="sm:px-6 px-4">

        {/* Layout */}
        <div className="flex flex-col items-center text-center gap-10">

          {/* Text Content */}
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              {heading}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Button */}
          <div>
            <Link to={buttonLink}>
              <button className="bg-[#1CA6A3]
                text-white font-semibold px-4 sm:px-8 py-3 rounded-xl
                transition-all duration-300
                hover:scale-105 hover:shadow-xl hover:bg-[#179490] hover:shadow-[#1CA6A3]/30 hover:-translate-y-0.5
                active:scale-95"
              >
                {buttonLabel}
              </button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
