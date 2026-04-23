import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react";

import { useEffect } from "react";



import { Zap, Sun, HardHat, ChefHat, } from "lucide-react";



const iconMap = { Zap, Sun, HardHat, ChefHat };



const programs = [

  {

    title: "Residential Electrical Training",

    description:

      "Learn the fundamentals of residential wiring, circuitry, and safety while preparing for careers in the electrical trades.",

    image:

      "/images/program1.png",

    href: "/programs/residential-electrical",

    icon: "Zap",

    cols: "lg:col-span-8",

  },

  {

    title: "Renewable Energy – Solar Technician Training",

    description:

      "Train for careers in renewable energy through hands-on experience with solar installation and energy systems.",

    image:

      "/images/program3.png",

    href: "/programs/renewable-energy",

    icon: "Sun",

    cols: "lg:col-span-4",

  },

  {

    title: "Framing & Structural Carpentry Training",

    description:

      "Build real-world construction skills including framing, layout, and blueprint reading for residential and commercial projects.",

    image:

      "/images/program2.png",

    href: "/programs/carpentry",

    icon: "HardHat",

    cols: "lg:col-span-4",

  },

  {

    title: "Culinary Training",

    description:

      "Develop professional kitchen skills and prepare for careers in food service, hospitality, and entrepreneurship.",

    image:

      "/images/program4.png",

    href: "/programs/culinary",

    icon: "ChefHat",

    cols: "lg:col-span-8",

  },

];



export default function ProjectsSection() {



  return (

    <section className="py-16 bg-[#F2F9F9] overflow-hidden">

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

   

         

           <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#1a1a1a] mb-10 sm:mb-[55px] leading-tight">

              Our{" "}

              <span

                style={{

                  background: "linear-gradient(90deg, #1CA6A3, #74B4E0)",

                  WebkitBackgroundClip: "text",

                  WebkitTextFillColor: "transparent",

                  backgroundClip: "text",

                }}

              >

                Programs

              </span>

            </h2>

       

        {/* ── 6-Image Grid ── */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">

  {programs.map((program, i) => {

    const Icon = iconMap[program.icon as keyof typeof iconMap];

    return (

      <div

        key={i}

        className={`relative rounded-2xl overflow-hidden group cursor-pointer ${program.cols} h-72 sm:h-80`}

      >

        {/* Image */}

        <img

          src={program.image}

          alt={program.title}

          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

        />



        {/* Gradient overlay — lighter, white-toned */}

        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent" />



        {/* Program badge */}

        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/90 shadow-sm backdrop-blur-sm border border-[#1CA6A3]/20">

          <Icon size={12} color="#1CA6A3" strokeWidth={2.5} />

          <span className="text-[10px] font-bold uppercase tracking-widest text-[#1CA6A3]">

            Program

          </span>

        </div>



        {/* Content */}

        <div className="absolute bottom-0 left-0 right-0 p-5">

          {/* Accent line */}

          <div className="h-[2px] w-8 rounded-full bg-[#1CA6A3] mb-3 transition-all duration-500 group-hover:w-14" />



          <p className="text-gray-900 font-bold text-base sm:text-lg leading-snug mb-1.5">

            {program.title}

          </p>

          <p className="text-[#2525252] text-sm font-medium leading-relaxed mb-4 line-clamp-2">

            {program.description}

          </p>



          {/* CTA Button */}

           <Link

            to="/programs"

            className="inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-lg bg-[#1CA6A3] text-white text-sm font-semibold transition-all duration-300 hover:bg-[#178a87] hover:gap-3 shadow-sm hover:shadow-md"

          >

            Learn More

            <ArrowRight size={14} strokeWidth={2.5} />

          </Link>

        </div>

      </div>

    );

  })}

</div>

       

      </div>

    </section>

  );

}

