import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useEffect } from "react";



interface Project {

  id: number;

  title: string;

  category: string;

  description: string;

  imageSrc: string;

  imageAlt: string;

}



const projects: Project[] = [

  {

    id: 1,

    title: "Residential Electrical Training",

    category: "Web Development",

    description:

      "Students built and tested residential wiring systems, gaining hands-on experience with circuits, panels, and safe electrical installations.",

    imageSrc:

      "/images/students1.png",

    imageAlt: "Student electrician working on wiring installation",

  },

  {

    id: 2,

    title: "Renewable Energy – Solar Technician Training",

    category: "Data & Design",

    description:

      "Students installed and configured solar energy systems, learning panel setup, energy flow, and basic maintenance technique",

    imageSrc:

      "/images/students2.png",

    imageAlt: "Students installing solar panels outdoors",

  },

  {

    id: 3,

    title: "Framing & Structural Carpentry",

    category: "Full Stack",

    description:

      "Students constructed structural frameworks, working with measurements, materials, and tools to build safe and durable structures.",

    

      imageSrc: "/images/students3.png",

    imageAlt: "Student carpenter working on wooden structure",

  },

  {

    id: 4,

    title: "Culinary Training Program",

    category: "Mobile Development",

    description:

      "Students prepared and presented a variety of dishes, learning kitchen techniques, food safety, and professional cooking skills.",

    imageSrc:

      "/images/program3.png",

    imageAlt: "Culinary student cooking in a professional kitchen",

  },

];



const WorkPreview: React.FC = () => {

  const [hoveredId, setHoveredId] = useState<number | null>(null);

   

  return (

    <section className="relative bg-white py-20 px-4 overflow-hidden">

      {/* Subtle background accent */}

      <div

        className="absolute top-0 left-0 w-full h-[2px]"

        style={{ background: "linear-gradient(90deg, #1CA6A3, #74B4E0)" }}

      />

      <div

        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-5 pointer-events-none"

        style={{ backgroundColor: "#1CA6A3" }}

      />

      <div

        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-5 pointer-events-none"

        style={{ backgroundColor: "#74B4E0" }}

      />



      <div className="relative max-w-7xl mx-auto mx-auto px-6 lg:px-8">

        {/* Header */}

        <div className="text-center mb-16">

          <span

            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"

            style={{ color: "#1CA6A3", backgroundColor: "#1CA6A310" }}

          >

            Some of Work

          </span>



          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">

            Training That Builds{" "}

            <span

              className="relative inline-block"

              style={{ color: "#1CA6A3" }}

            >

              Real Projects

              <svg

                className="absolute -bottom-2 left-0 w-full"

                viewBox="0 0 300 12"

                fill="none"

                xmlns="http://www.w3.org/2000/svg"

                aria-hidden="true"

              >

                <path

                  d="M2 8.5C60 3.5 150 1 298 8.5"

                  stroke="#74B4E0"

                  strokeWidth="3"

                  strokeLinecap="round"

                />

              </svg>

            </span>

          </h2>



          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">

            Our students don't just learn in classrooms. They work on real

            projects that impact communities across Detroit.

          </p>

        </div>



        {/* Bento Grid — 12-col, 2 rows: [8+4] then [4+8] */}

        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-[auto] gap-4 mb-14">



          {/* Row 1 — Card 1: 8 cols */}

          <article

            className="md:col-span-8 group relative rounded-2xl overflow-hidden cursor-pointer h-[320px] md:h-[380px]"

            onMouseEnter={() => setHoveredId(1)}

            onMouseLeave={() => setHoveredId(null)}

            style={{

              boxShadow: hoveredId === 1 ? "0 24px 48px rgba(28,166,163,0.2)" : "0 4px 20px rgba(0,0,0,0.1)",

              transition: "box-shadow 0.3s ease",

            }}

          >

            <img

              src={projects[0].imageSrc}

              alt={projects[0].imageAlt}

              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

              loading="lazy"

            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            {/* <div className="absolute bottom-0 left-0 right-0 p-7">

              <span

                className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"

                style={{ backgroundColor: "#0D1F2280", color: "#74B4E0", border: "1px solid #74B4E060", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}

              >

                Electrical

              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">

                {projects[0].title}

              </h3>

              <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-xl">

                {projects[0].description}

              </p>

            </div> */}

          </article>



          {/* Row 1 — Card 2: 4 cols */}

          <article

            className="md:col-span-4 group relative rounded-2xl overflow-hidden cursor-pointer h-[260px] md:h-[380px]"

            onMouseEnter={() => setHoveredId(2)}

            onMouseLeave={() => setHoveredId(null)}

            style={{

              boxShadow: hoveredId === 2 ? "0 20px 40px rgba(28,166,163,0.18)" : "0 4px 16px rgba(0,0,0,0.08)",

              transition: "box-shadow 0.3s ease",

            }}

          >

            <img

              src={projects[1].imageSrc}

              alt={projects[1].imageAlt}

              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

              loading="lazy"

            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            {/* <div className="absolute bottom-0 left-0 right-0 p-6">

              <span

                className="inline-block text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full mb-3"

                style={{ backgroundColor: "#0D1F2280", color: "#74B4E0", border: "1px solid #74B4E060", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}

              >

                Solar

              </span>

              <h3 className="text-lg font-bold text-white mb-2 leading-snug">

                {projects[1].title}

              </h3>

              <p className="text-white/70 text-xs leading-relaxed line-clamp-3">

                {projects[1].description}

              </p>

            </div> */}

          </article>



          {/* Row 2 — Card 3: 4 cols */}

          <article

            className="md:col-span-4 group relative rounded-2xl overflow-hidden cursor-pointer h-[260px] md:h-[380px]"

            onMouseEnter={() => setHoveredId(3)}

            onMouseLeave={() => setHoveredId(null)}

            style={{

              boxShadow: hoveredId === 3 ? "0 20px 40px rgba(28,166,163,0.18)" : "0 4px 16px rgba(0,0,0,0.08)",

              transition: "box-shadow 0.3s ease",

            }}

          >

            <img

              src={projects[2].imageSrc}

              alt={projects[2].imageAlt}

              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

              loading="lazy"

            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            {/* <div className="absolute bottom-0 left-0 right-0 p-6">

              <span

                className="inline-block text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full mb-3"

                style={{ backgroundColor: "#0D1F2280", color: "#74B4E0", border: "1px solid #74B4E060", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}

              >

                Carpentry

              </span>

              <h3 className="text-lg font-bold text-white mb-2 leading-snug">

                {projects[2].title}

              </h3>

              <p className="text-white/70 text-xs leading-relaxed line-clamp-3">

                {projects[2].description}

              </p>

            </div> */}

          </article>



          {/* Row 2 — Card 4: 8 cols */}

          <article

            className="md:col-span-8 group relative rounded-2xl overflow-hidden cursor-pointer h-[320px] md:h-[380px]"

            onMouseEnter={() => setHoveredId(4)}

            onMouseLeave={() => setHoveredId(null)}

            style={{

              boxShadow: hoveredId === 4 ? "0 24px 48px rgba(28,166,163,0.2)" : "0 4px 20px rgba(0,0,0,0.1)",

              transition: "box-shadow 0.3s ease",

            }}

          >

            <img

              src={projects[3].imageSrc}

              alt={projects[3].imageAlt}

              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

              loading="lazy"

            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            {/* <div className="absolute bottom-0 left-0 right-0 p-7">

              <span

                className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"

                style={{ backgroundColor: "#0D1F2280", color: "#74B4E0", border: "1px solid #74B4E060", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}

              >

                Culinary

              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">

                {projects[3].title}

              </h3>

              <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-xl">

                {projects[3].description}

              </p>

            </div> */}

          </article>



        </div>



        {/* CTA */}

        <div className="flex justify-center">

          <Link

            to="/work"

            className="group inline-flex items-center gap-3 px-4 sm:px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-sm bg-[#1CA6A3] hover:bg-[#179490] hover:shadow-[#1CA6A3]/30 hover:-translate-y-0.5"

          >

            View Our Featured Projects

           <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">

                arrow_forward

              </span>

          </Link>

        </div>

      </div>

    </section>

  );

};



export default WorkPreview;

