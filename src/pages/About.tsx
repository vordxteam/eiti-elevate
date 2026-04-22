import heroImage from "@/assets/hero-image.jpg";
import projectPark from "@/assets/project-park.jpg";
import projectBuffalo from "@/assets/project-buffalo.jpg";
import CTA from "@/components/ui/CTA";
import { Target, Eye, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Slider from "@/components/Slider";


const companyCards = [
  { src: "/images/company1.jpg", alt: "Company 1", width: 188, height: 100 },
  { src: "/images/company2.jpg", alt: "Company 2", width: 188, height: 100 },
  { src: "/images/company3.jpg", alt: "Company 3", width: 188, height: 100 },
  { src: "/images/company4.jpg", alt: "Company 4", width: 188, height: 100 },
  { src: "/images/company5.png", alt: "Company 5", width: 188, height: 100 },
  { src: "/images/company6.jpg", alt: "Company 6", width: 188, height: 100 },
];

const AboutPage = () => {
  const team = [
    {
      name: "Anthony Jackson",
      role: "President",
      initials: "AJ",
      color: "#1CA6A3",
    },
    {
      name: "William Aaron",
      role: "Chief Operating Officer",
      initials: "WA",
      color: "#74B4E0",
    },
    {
      name: "Tailar Jackson",
      role: "Executive Assistant",
      initials: "TJ",
      color: "#5FB673",
    },
    {
      name: "Abram Jones",
      role: "Residential Electrical Instructor",
      initials: "AJ",
      color: "#1CA6A3",
    },
    {
      name: "Fred Burr Jr.",
      role: "Framing and Structural Carpentry Instructor",
      initials: "FB",
      color: "#74B4E0",
    },
    {
      name: "Brandon Knight",
      role: "Renewable Energy Instructor",
      initials: "BK",
      color: "#5FB673",
    },
  ];

  return (
    <div>
      <PageHero
        heading={
          <>
            Who{" "}
            <span
              style={{
                color: "white",
                textShadow:
                  "0 2px 20px rgba(0,0,0,0.3), 0 0 40px rgba(116,180,224,0.2)",
              }}
            >
              We Are
            </span>
          </>
        }
        description="For over 15 years, EITI has equipped Detroit residents with the skills and pathways needed to enter and succeed in the workforce."
        buttonLabel="Apply Today"
        buttonLink="/apply"
        backgroundImage="/images/hero-about2.png"
      />

      {/* Mission & Vision */}
      <section className="bg-[#F2F9F9] sm:mt-20 mt-10 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-16 flex flex-col items-center gap-4 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#1CA6A3]/20 bg-[#1CA6A3]/10 px-5 py-2">
              <span className="text-[11px] font-medium uppercase tracking-[.15em] text-[#0d7a77]">
                EITI Detroit
              </span>
            </div>
            <h1 className="text-4xl font-bold  sm:max-w-150 leading-relaxed tracking-tight text-[#111] sm:text-5xl">
              Built on{" "}
              <span className="relative mr-1 inline-block text-[#1CA6A3]">
                purpose
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
              driven by people
            </h1>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Mission */}
            <div className="group cursor-default overflow-hidden rounded-[20px] border border-black/[0.06] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.09)]">
              <div className="relative p-9">
                {/* <span className="pointer-events-none absolute right-8 top-6 select-none font-serif text-[72px] font-bold leading-none text-black/[0.06]">
                01
              </span> */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1CA6A3]/10">
                  <Target size={26} stroke="#1CA6A3" strokeWidth={1.8} />
                </div>
                <span className="inline-block rounded-full bg-[#1CA6A3]/10 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[.1em] text-[#0d7a77]">
                  Our Mission
                </span>
                <h2 className="mt-3.5  text-[1.75rem] font-bold leading-[1.15] text-[#111]">
                  Advancing economic mobility for Detroit
                </h2>
                <p className="mt-3.5 text-[14.5px] font-light leading-[1.78] text-[#555]">
                  EITI trains Detroit residents for real careers through
                  hands on, employer aligned programs, equipping individuals
                  with the skills and credentials needed for sustainable
                  employment and long term stability.
                </p>
              </div>
              <div className="flex items-center gap-2.5 border-t border-black/[0.06] px-9 py-5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1CA6A3]" />
                <span className="text-[11px] font-medium uppercase tracking-[.08em] text-[#1CA6A3]">
                  Workforce Training
                </span>
                <ArrowRight
                  size={16}
                  stroke="#1CA6A3"
                  strokeWidth={2}
                  className="ml-auto"
                />
              </div>
            </div>

            {/* Vision */}
            <div className="group cursor-default overflow-hidden rounded-[20px] border border-black/[0.06] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.09)]">
              <div className="relative p-9">
                {/* <span className="pointer-events-none absolute right-8 top-6 select-none font-serif text-[72px] font-bold leading-none text-black/[0.06]">
                02
              </span> */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#74B4E110]">
                  <Eye size={26} stroke="#74B4E0" strokeWidth={1.8} />
                </div>
                <span className="inline-block rounded-full bg-[#74B4E0]/10 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[.1em] text-[#3a7ea8]">
                  Our Vision
                </span>
                <h2 className="mt-3.5 text-[1.75rem] font-bold leading-[1.15] text-[#111]">
                  A workforce where everyone belongs
                </h2>
                <p className="mt-3.5 text-[14.5px] font-light leading-[1.78] text-[#555]">
                  To build a stronger, more inclusive workforce connecting every
                  individual to real opportunity, long term careers, and lasting
                  economic stability, where communities don't just survive, they
                  thrive.
                </p>
              </div>
              <div className="flex items-center gap-2.5 border-t border-black/[0.06] px-9 py-5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#74B4E0]" />
                <span className="text-[11px] font-medium uppercase tracking-[.08em] text-[#5898c8]">
                  Inclusive Growth
                </span>
                <ArrowRight
                  size={16}
                  stroke="#74B4E0"
                  strokeWidth={2}
                  className="ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="relative overflow-hidden bg-white px-6 py-20">
        {/* Subtle noise texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="mb-5 block text-[16px] font-medium  tracking-[.22em] text-[#1CA6A3]">
              The people behind the mission
            </span>
            <h2 className=" text-5xl font-semibold leading-[1.05] tracking-tight text-[#111] sm:text-6xl">
              Meet the{" "}
              <span className="relative inline-block">
                <p className="text-[#1CA6A3]">hearts</p>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
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
              <br />
              behind EITI
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] font-light leading-[1.8] text-[#777]">
              Each member of our team has chosen this work not for ease, but
              because they believe every person deserves a real chance.
            </p>
          </div>

          {/* Grid — 2px gap gives a "window pane" luxury feel */}
          <div className="grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="group relative cursor-default overflow-hidden bg-[#fafafa] p-10 transition-colors duration-400 hover:bg-white"
              >
                {/* Avatar */}
                <div className="relative mb-7 inline-block">
                  <div
                    className="flex h-[72px] w-[72px] items-center justify-center rounded-full transition-transform duration-400 group-hover:scale-105"
                    style={{ backgroundColor: member.color }}
                  >
                    <span className="text-[1.6rem] font-bold tracking-wider text-white">
                      {member.initials}
                    </span>
                  </div>
                  {/* Ring appears on hover */}
                  <div
                    className="absolute inset-[-4px] rounded-full border border-transparent transition-colors duration-700 group-hover:border-current"
                    style={{ color: member.color }}
                  />
                </div>

                {/* Role */}
                <span
                  className="mb-2.5 block text-[10.5px] font-medium uppercase tracking-[.18em]"
                  style={{ color: member.color }}
                >
                  {member.role}
                </span>

                {/* Name */}
                <h3 className="mb-3  text-[1.5rem] font-semibold leading-snug text-[#111]">
                  {member.name}
                </h3>

                {/* Animated underline */}
                <div
                  className="mb-4 h-px w-7 transition-all duration-400 group-hover:w-12"
                  style={{ backgroundColor: member.color }}
                />

                {/* Ghost number */}
                {/* <span className="pointer-events-none absolute bottom-8 right-8 select-none font-serif text-[3rem] font-semibold leading-none text-[#111] opacity-[.04] transition-opacity duration-300 group-hover:opacity-[.07]">
                {String(i + 1).padStart(2, "0")}
              </span> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Values/Why We Matter — Premium Editorial */}
      <section className="relative py-[60px] my-20 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F22] via-[#1a2f33] to-[#0D1F22]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Accent glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1CA6A3] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#74B4E0] rounded-full blur-[150px] opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4   bg-white/5 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#1CA6A3]">
                Our Impact
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-white leading-tight mb-8">
              Building{" "}
              <span className="relative inline-block text-[#1CA6A3]">
                Careers
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
              ,<br className="hidden sm:block" />
              <span className="text-[#74B4E0]">Transforming</span> Communities
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Value Props */}
            <div className="order-2 lg:order-1">
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-lg">
                EITI is more than a training institute. We are a bridge between
                potential and opportunity, connecting Detroit residents to
                meaningful careers.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "handshake",
                    text: "Employer-aligned training programs",
                    color: "#1CA6A3",
                  },
                  {
                    icon: "construction",
                    text: "Hands-on, practical skill development",
                    color: "#74B4E0",
                  },
                  {
                    icon: "trending_up",
                    text: "Proven pathway to economic mobility",
                    color: "#5FB673",
                  },
                  {
                    icon: "groups",
                    text: "Community-focused workforce solutions",
                    color: "#1CA6A3",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${item.color}15`,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ color: item.color, fontSize: "22px" }}
                      >
                        {item.icon}
                      </span>
                    </div>
                    <div className="pt-1">
                      <span className="text-white/90 font-medium text-base">
                        {item.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Premium Image Composition */}
            <div className="order-1 lg:order-2 relative">
              {/* Main feature image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] sm:aspect-[16/10]">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/about-impact.png"
                    alt="EITI construction training"
                  />
                </div>
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F22]/60 via-transparent to-transparent" />

                {/* Stats badge overlay */}
                <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-[100px] sm:w-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-4 sm:gap-8">
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-headline font-bold text-[#1CA6A3]">
                          94%
                        </div>
                        <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">
                          Placement
                        </div>
                      </div>
                      <div className="w-px h-10 bg-white/20" />
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-headline font-bold text-[#74B4E0]">
                          12k+
                        </div>
                        <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">
                          Graduates
                        </div>
                      </div>
                      <div className="w-px h-10 bg-white/20" />
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-headline font-bold text-[#5FB673]">
                          15+
                        </div>
                        <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">
                          Years
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#1CA6A3]/30 rounded-full hidden lg:block" />
              <div className="absolute -bottom-4 right-20 w-16 h-16 bg-[#74B4E0]/20 rounded-full blur-xl hidden lg:block" />
            </div>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container-narrow px-4 sm:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#333333] leading-tight mb-4">
              Our{" "}
              <span className="relative inline-block text-[#1CA6A3]">
                Partners
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
            <p className="text-lg text-[#555] max-w-2xl mx-auto">
              Working together to expand access and impact.
            </p>
          </div>
          <Slider images={companyCards} speed={30} />
        </div>
      </section>
      <CTA
        heading="Bridging Opportunity"
        description="EITI connects Detroit residents with meaningful careers through real pathways to success."
        buttonLabel="Get In Touch"
        buttonLink="/apply"
      />
    </div>
  );
};

export default AboutPage;
