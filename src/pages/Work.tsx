import CTA from "@/components/ui/CTA";
import PageHero from "@/components/PageHero";

const projects = [
  {
    id: "virginia-park",
    title: "Virginia Park Neighborhood Beautification",
    partner: "Ally",
    description:
      "EITI partnered with Ally Financial to drive residential improvements and community revitalization across Detroit's Virginia Park neighborhood, turning hands on training into tangible, lasting impact.",
    image:
      "/images/virginapark.jpeg",
    category: "Community Revitalization",
    ctaLink:
      "https://drive.google.com/drive/folders/1rWfL25PrmaCXsB9vO2Hd0CMoxLRoUrjQ?usp=drive_link",
    color: "#1CA6A3",
    year: "2023",
    stat: "40+ Homes Improved",
    index: "01",
  },
  {
    id: "buffalo-soldiers",
    title: "Pole Barn Construction for Buffalo Soldiers Heritage",
    partner: "Carhartt",
    description:
      "A landmark collaboration with Carhartt and the Buffalo Soldiers Heritage Association. EITI students built a functional pole barn structure, honoring Detroit's history while earning real construction credentials.",
    image:
      "/images/poleBarn.jpeg",
    category: "Historic Preservation",
    ctaLink:
      "https://drive.google.com/drive/folders/1ArQ2X7Lks2GmOcKvoahGRoLTUlGFJVwL?usp=drive_link",
    color: "#74B4E0",
    year: "2023",
    stat: "25+ Students Trained",
    index: "02",
  },
];

const WorkPage = () => (
  <div>
    <PageHero
      heading={
        <>
          Real Projects.{" "}
          <span
            style={{
              color: "white",
              textShadow:
                "0 2px 20px rgba(0,0,0,0.3), 0 0 40px rgba(116,180,224,0.2)",
            }}
          >
            Real Experience.
          </span>
        </>
      }
      description="EITI students gain hands on experience by working on real projects that serve communities and partners across Detroit."
      buttonLabel="Explore Projects"
      buttonLink="#projects"
      backgroundImage="/images/hero-work.png"
    />

    {/* ── Featured Projects ── */}
    <section
      id="projects"
      className="relative py-20  mt-10 sm:mt-20 overflow-hidden"
      style={{ backgroundColor: "#EEF8F8" }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(28,166,163,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(28,166,163,0.07) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute top-10 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "#1CA6A3", opacity: 0.07 }}
      />
      <div
        className="absolute bottom-10 -right-20 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "#74B4E0", opacity: 0.07 }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              backgroundColor: "rgba(28,166,163,0.1)",
              border: "1px solid rgba(28,166,163,0.2)",
            }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#1CA6A3]">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-[#0D1F22] mb-8">
            Our{" "}
            <span
              className="relative inline-block"
              style={{ color: "#1CA6A3" }}
            >
              Projects
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
        </div>

        {/* Project Showcase — Premium Editorial Layout */}
        <div className="space-y-20 sm:space-y-32">
          {/* Project 1: Virginia Park — Image Left, Content Right */}
          <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative h-64 sm:h-80 lg:h-[480px] overflow-hidden rounded-2xl">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)",
                }}
              />
              {/* Category badge */}
              <div className="absolute top-6 left-6">
                <span
                  className="px-4 py-2 rounded-full text-[11px] font-bold text-white tracking-wider uppercase"
                  style={{ backgroundColor: projects[0].color }}
                >
                  {projects[0].category}
                </span>
              </div>
              {/* Index number */}
              <div
                className="absolute bottom-4 right-4 font-headline font-black text-white/10 leading-none select-none pointer-events-none"
                style={{ fontSize: "clamp(60px, 10vw, 100px)" }}
              >
                {projects[0].index}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              {/* Partner */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1CA6A3]">
                  Partner
                </span>
                <div
                  className="h-px w-12"
                  style={{ backgroundColor: "#1CA6A320" }}
                />
                <span
                  className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "#1CA6A312",
                    color: "#1CA6A3",
                    border: "1px solid #1CA6A325",
                  }}
                >
                  {projects[0].partner}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-bold text-[#0D1F22] mb-4 leading-tight">
                {projects[0].title}
              </h3>

              {/* Description */}
              <p className="text-base text-[#555] leading-relaxed mb-6 max-w-lg">
                {projects[0].description}
              </p>

              {/* Stats row */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#1CA6A3", fontSize: "18px" }}
                  >
                    bolt
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: "#1CA6A3" }}
                  >
                    {projects[0].stat}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#74B4E0", fontSize: "18px" }}
                  >
                    calendar_today
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: "#74B4E0" }}
                  >
                    {projects[0].year}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={projects[0].ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl font-bold text-white text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group/btn w-fit"
                style={{ backgroundColor: "#1CA6A3" }}
              >
                View Case Study
                <span
                  className="material-symbols-outlined transition-transform duration-300 group-hover/btn:translate-x-1"
                  style={{ fontSize: "16px" }}
                >
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Project 2: Buffalo Soldiers — Content Left, Image Right */}
          <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content — appears first on mobile, left on desktop */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              {/* Partner */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#74B4E0]">
                  Partner
                </span>
                <div
                  className="h-px w-12"
                  style={{ backgroundColor: "#74B4E020" }}
                />
                <span
                  className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "#74B4E012",
                    color: "#74B4E0",
                    border: "1px solid #74B4E025",
                  }}
                >
                  {projects[1].partner}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-bold text-[#0D1F22] mb-4 leading-tight">
                {projects[1].title}
              </h3>

              {/* Description */}
              <p className="text-base text-[#555] leading-relaxed mb-6 max-w-lg">
                {projects[1].description}
              </p>

              {/* Stats row */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#74B4E0", fontSize: "18px" }}
                  >
                    bolt
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: "#74B4E0" }}
                  >
                    {projects[1].stat}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#5FB673", fontSize: "18px" }}
                  >
                    calendar_today
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: "#5FB673" }}
                  >
                    {projects[1].year}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={projects[1].ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl font-bold text-white text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group/btn w-fit"
                style={{ backgroundColor: "#74B4E0" }}
              >
                View Case Study
                <span
                  className="material-symbols-outlined transition-transform duration-300 group-hover/btn:translate-x-1"
                  style={{ fontSize: "16px" }}
                >
                  arrow_forward
                </span>
              </a>
            </div>

            {/* Image — appears second on mobile, right on desktop */}
            <div className="relative h-64 sm:h-80 lg:h-[480px] overflow-hidden rounded-2xl order-1 lg:order-2">
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)",
                }}
              />
              {/* Category badge */}
              <div className="absolute top-6 left-6">
                <span
                  className="px-4 py-2 rounded-full text-[11px] font-bold text-white tracking-wider uppercase"
                  style={{ backgroundColor: "#74B4E0" }}
                >
                  {projects[1].category}
                </span>
              </div>
              {/* Index number */}
              <div
                className="absolute bottom-4 right-4 font-headline font-black text-white/10 leading-none select-none pointer-events-none"
                style={{ fontSize: "clamp(60px, 10vw, 100px)" }}
              >
                {projects[1].index}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Projects That Make a Difference ── */}
    <section
      className="relative py-24 sm:mt-20 mt-10 sm:py-32 overflow-hidden"
      style={{ backgroundColor: "#0D1F22" }}
    >
      {/* Dark grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.03,
        }}
      />
      <div
        className="absolute top-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(28,166,163,0.13) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(116,180,224,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 sm:mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              backgroundColor: "rgba(28,166,163,0.1)",
              border: "1px solid rgba(28,166,163,0.2)",
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#1CA6A3]">
              By The Numbers
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-white leading-[1.1]">
            Projects That{" "}
            <span
              className="relative inline-block"
              style={{ color: "#1CA6A3" }}
            >
              Make a Difference
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
        </div>

        {/* Stats — luxury editorial */}
        <div className="grid  grid-cols-1 sm:grid-cols-3">
          {[
            {
              value: "60+",
              label: "Projects Completed",
              desc: "Real builds across Detroit communities, driven by student talent.",
              icon: "construction",
              color: "#1CA6A3",
            },
            {
              value: "200+",
              label: "Students Trained",
              desc: "Participants who earned hands-on skills on live project sites.",
              icon: "school",
              color: "#74B4E0",
            },
            {
              value: "15+",
              label: "Community Partners",
              desc: "Organizations united behind Detroit's workforce future.",
              icon: "handshake",
              color: "#5FB673",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="group px-0 sm:px-8 py-10 sm:py-2 border-b sm:border-b-0 sm:border-r last:border-r-0"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              {/* Icon + line */}
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    backgroundColor: `${stat.color}18`,
                    border: `1px solid ${stat.color}30`,
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: stat.color, fontSize: "18px" }}
                  >
                    {stat.icon}
                  </span>
                </div>
                <div
                  className="h-px flex-1"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                />
              </div>

              {/* Number */}
              <p
                className="font-headline font-black leading-none mb-3"
                style={{
                  fontSize: "clamp(52px, 9vw, 80px)",
                  color: stat.color,
                }}
              >
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70 mb-3">
                {stat.label}
              </p>

              {/* Desc */}
              <p
                className="text-xs leading-relaxed"
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                {stat.desc}
              </p>

              {/* Hover accent line */}
              <div
                className="mt-7 h-[2px] rounded-full transition-all duration-500 w-0 group-hover:w-16"
                style={{ backgroundColor: stat.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTA
      heading="Partner With Us"
      description="Help us expand access to training, create jobs, and strengthen Detroit's workforce."
      buttonLabel="Get In Touch"
      buttonLink="/apply"
    />
  </div>
);

export default WorkPage;
