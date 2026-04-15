import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import projectPark from "@/assets/project-park.jpg";
import projectBuffalo from "@/assets/project-buffalo.jpg";
import CTA from "@/components/ui/CTA";

const programs = [
  {
    id: "electrical",
    slug: "electrical",
    title: "Residential Electrical Training",
    shortTitle: "Electrical",
    desc: "EITI's Residential Electrical Training prepares participants for entry-level careers in the electrical trades through hands-on instruction and real-world application.",
    learn: [
      "Wiring and circuitry fundamentals",
      "Electrical safety and code basics",
      "Residential system installation",
      "Jobsite practices and tools"
    ],
    careers: [
      "Electrical apprenticeships",
      "Entry-level electrical technician roles",
      "Construction industry positions"
    ],
    image: projectPark,
    iconColor: "#1CA6A3"
  },
  {
    id: "solar",
    slug: "solar",
    title: "Renewable Energy – Solar Technician Training",
    shortTitle: "Solar",
    desc: "This program introduces participants to the growing renewable energy sector, focusing on solar photovoltaic systems and installation practices.",
    learn: [
      "Solar PV system installation",
      "Energy efficiency principles",
      "System maintenance and safety",
      "Renewable energy fundamentals"
    ],
    careers: [
      "Solar installation technician",
      "Renewable energy roles",
      "Green construction careers"
    ],
    image: projectBuffalo,
    iconColor: "#74B4E0"
  },
  {
    id: "carpentry",
    slug: "carpentry",
    title: "Framing & Structural Carpentry",
    shortTitle: "Carpentry",
    desc: "Participants gain hands-on experience in residential and light commercial construction, building the foundation for careers in carpentry and skilled trades.",
    learn: [
      "Blueprint reading",
      "Framing walls and roofs",
      "Structural layout",
      "Tool safety and usage"
    ],
    careers: [
      "Carpentry apprenticeships",
      "Construction roles",
      "Skilled trades positions"
    ],
    image: heroImage,
    iconColor: "#5FB673"
  },
  {
    id: "culinary",
    slug: "culinary",
    title: "Culinary Training Program",
    shortTitle: "Culinary",
    desc: "This program prepares participants for careers in food service and hospitality through hands-on kitchen experience and professional training.",
    learn: [
      "Food preparation techniques",
      "Kitchen safety and sanitation",
      "Professional kitchen operations",
      "Culinary fundamentals"
    ],
    careers: [
      "Restaurant and kitchen roles",
      "Catering and hospitality positions",
      "Food entrepreneurship pathways"
    ],
    image: projectPark,
    iconColor: "#1CA6A3"
  }
];

const ProgramsPage = () => (
  <div>
    {/* Hero Section */}
    <section className="relative h-full flex items-center overflow-hidden bg-surface pt-32">
      <div className="container-narrow grid w-full items-center gap-12 relative z-10 md:grid-cols-12 px-4 sm:px-6">
        <div className="md:col-span-7">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-[#1CA6A3] leading-[1.1] tracking-tight mb-8">
            Programs Built for <span className="text-[#74B4E0]">Real Careers</span>
          </h1>
          <p className="text-lg md:text-xl text-[#333333] max-w-xl mb-10 leading-relaxed">
            EITI offers hands-on training programs designed to prepare participants for immediate entry into high-demand industries. Each program combines practical instruction, job readiness, and real-world application.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-bold transition-all bg-[#1CA6A3] text-white hover:bg-[#179490]"
            >
              Explore Programs
              <span className="material-symbols-outlined">arrow_downward</span>
            </a>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="rounded-2xl overflow-hidden editorial-shadow bg-white p-2">
              <img
                alt="EITI Training Facility"
                className="w-full aspect-[4/5] object-cover rounded-xl"
                src={heroImage}
              />
          </div>
          <div className="absolute bottom-3 -left-5 md:-left-7 max-w-[240px] rounded-xl bg-[#1CA6A3]  p-6 editorial-shadow">
            <p className="text-3xl font-headline font-black text-white">94%</p>
            <p className="text-sm  font-semibold text-[#333333]">Employment rate within 6 months of graduation</p>
          </div>
        </div>
      </div>
    </section>

    {/* Programs Grid */}
    <section id="programs" className="py-16 sm:py-24 bg-[#F2F9F9]">
      <div className="container-narrow px-4 sm:px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold text-[#5FB673] uppercase tracking-[0.25em] mb-4">
            Career-Focused Training
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#333333] leading-tight">
            Our <span className="text-[#1CA6A3]">Programs</span>
          </h2>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-headline font-bold text-white leading-tight">
                    {program.title}
                  </h3>
                </div>
                {/* Color accent bar */}
                <div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ backgroundColor: program.iconColor }}
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-6">
                  {program.desc}
                </p>

                {/* What You'll Learn */}
                <div className="mb-6">
                  <h4
                    className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2"
                    style={{ color: program.iconColor }}
                  >
                    <span className="material-symbols-outlined text-sm">school</span>
                    What You'll Learn
                  </h4>
                  <ul className="space-y-2">
                    {program.learn.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#555]">
                        <span
                          className="material-symbols-outlined text-sm mt-0.5 flex-shrink-0"
                          style={{ color: program.iconColor }}
                        >
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Career Outcomes */}
                <div className="mb-6">
                  <h4
                    className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2"
                    style={{ color: program.iconColor }}
                  >
                    <span className="material-symbols-outlined text-sm">work</span>
                    Career Outcomes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {program.careers.map((career, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#F2F9F9] text-[#333]"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to="/apply"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-lg group/btn mt-auto"
                  style={{ backgroundColor: program.iconColor }}
                >
                  Apply Now
                  <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/btn:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <CTA
      heading="Choose Your Path. Start Today."
      description=""
      buttonLabel="Apply Now"
      buttonLink="/apply"
    />
  </div>
);

export default ProgramsPage;
