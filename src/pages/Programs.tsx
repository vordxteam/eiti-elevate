import { Link } from "react-router-dom";
import CTA from "@/components/ui/CTA";
import PageHero from "@/components/PageHero";

const programs = [
  {
    id: "electrical",
    slug: "electrical",
    title: "Residential Electrical Training",
    shortTitle: "Electrical",
    icon: "bolt",
    desc: "EITI's Residential Electrical Training prepares participants for entry level careers in the electrical trades through hands on instruction and real world application.",
    learn: [
      "Wiring and circuitry fundamentals",
      "Electrical safety and code basics",
      "Residential system installation",
      "Jobsite practices and tools"
    ],
    careers: [
      "Electrical apprenticeships",
      "Entry level electrical technician roles",
      "Construction industry positions"
    ],
    iconColor: "#1CA6A3"
  },
  {
    id: "solar",
    slug: "solar",
    title: "Renewable Energy Solar Technician Training",
    shortTitle: "Solar",
    icon: "solar_power",
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
    iconColor: "#74B4E0"
  },
  {
    id: "carpentry",
    slug: "carpentry",
    title: "Framing & Structural Carpentry",
    shortTitle: "Carpentry",
    icon: "foundation",
    desc: "Participants gain hands on experience in residential and light commercial construction, building the foundation for careers in carpentry and skilled trades.",
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
    iconColor: "#5FB673"
  },
  {
    id: "culinary",
    slug: "culinary",
    title: "Culinary Training Program",
    shortTitle: "Culinary",
    icon: "restaurant",
    desc: "This program prepares participants for careers in food service and hospitality through hands on kitchen experience and professional training.",
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
    iconColor: "#1CA6A3"
  }
];

const ProgramsPage = () => (
  <div>
    <PageHero
      heading={
        <>
          Programs Built for{" "}
          <span
            style={{
              color: "white",
              textShadow: "0 2px 20px rgba(0,0,0,0.3), 0 0 40px rgba(116,180,224,0.2)",
            }}
          >
            Real Careers
          </span>
        </>
      }
      description="EITI offers hands on training programs designed to prepare participants for immediate entry into high demand industries. Each program combines practical instruction, job readiness, and real world application."
      buttonLabel="Explore Programs"
      buttonLink="#programs"
      backgroundImage="/images/programs-hero.png" 
    />

    {/* Programs Grid */}
    <section id="programs" className="relative mt-10 py-20 overflow-hidden" style={{ backgroundColor: "#EEF8F8" }}>
      {/* Grid bg pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(28,166,163,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(28,166,163,0.07) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-10 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "#1CA6A3", opacity: 0.07 }} />
      <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "#74B4E0", opacity: 0.07 }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ backgroundColor: "rgba(28,166,163,0.1)", border: "1px solid rgba(28,166,163,0.2)" }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#1CA6A3]">Career-Focused Training</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-[#0D1F22] mb-8">
            Our{" "}
            <span className="relative inline-block" style={{ color: "#1CA6A3" }}>
              Programs
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2 8.5C60 3.5 150 1 298 8.5" stroke="#74B4E0" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </div>

        {/* Program Cards — compact 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg flex flex-col"
              style={{
                border: `1px solid ${program.iconColor}20`,
                boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
              }}
            >
              {/* Top color bar */}
              <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${program.iconColor}, ${program.iconColor}50)` }} />

              {/* Ghost number */}
              <div
                className="absolute -top-1 right-1 font-headline font-black leading-none select-none pointer-events-none"
                style={{ fontSize: "clamp(72px, 12vw, 110px)", color: program.iconColor, opacity: 0.05, lineHeight: 1 }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative p-4 sm:p-5 flex flex-col flex-grow">
                {/* Content wrapper - grows to push button down */}
                <div className="flex-grow">
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{ background: `linear-gradient(135deg, ${program.iconColor}25, ${program.iconColor}10)`, border: `1px solid ${program.iconColor}20` }}
                      >
                        <span className="material-symbols-outlined" style={{ color: program.iconColor, fontSize: "15px" }}>{program.icon}</span>
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-[0.3em]" style={{ color: program.iconColor }}>
                        {String(index + 1).padStart(2, "0")} — {program.shortTitle}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-[25px] font-headline font-bold text-[#0D1F22] mb-1.5 leading-tight pr-6">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] leading-relaxed text-[#777] mb-3 line-clamp-2">{program.desc}</p>

                  {/* Learn pills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {program.learn.map((item, i) => (
                      <span
                        key={i}
                        className="text-[12px] font-normal px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${program.iconColor}10`, color: program.iconColor, border: `1px solid ${program.iconColor}20` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply button - now at bottom */}
                <Link
                  to="/apply"
                  className="inline-flex items-center gap-1 text-[11px] font-bold py-2 px-3.5 rounded-lg text-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group/cta"
                  style={{ backgroundColor: program.iconColor }}
                >
                  Apply Now
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover/cta:translate-x-0.5" style={{ fontSize: "13px" }}>arrow_forward</span>
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
      description="No prior experience required. Our hands on programs are built to take you from day one to job ready, with real skills, real credentials, and real employers waiting."
      buttonLabel="Apply Now"
      buttonLink="/apply"
    />
  </div>
);

export default ProgramsPage;
