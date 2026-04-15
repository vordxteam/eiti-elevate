import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import projectPark from "@/assets/project-park.jpg";
import projectBuffalo from "@/assets/project-buffalo.jpg";
import FluidReveal from "@/components/FluidReveal";
import Slider from "@/components/Slider";
import CTA from "@/components/ui/CTA";
import WorkPreview from "@/components/WorkPreview";

const tracks = [
  {
    title: "Residential Electrical Training",
    category: "Industrial",
    description:
      "Learn the fundamentals of residential wiring, circuitry, and safety while preparing for careers in the electrical trades.",
    image: projectPark,
  },
  {
    title: "Renewable Energy – Solar Technician Training",
    category: "Green Energy",
    description:
      "Train for careers in renewable energy through hands-on experience with solar installation and energy systems.",
    image: projectBuffalo,
  },
  {
    title: "Framing & Structural Carpentry Training",
    category: "Construction",
    description:
      "Build real-world construction skills including framing, layout, and blueprint reading for residential and commercial projects.",
    image: heroImage,
  },
  {
    title: "Culinary Training",
    category: "Hospitality",
    description:
      "Develop professional kitchen skills and prepare for careers in food service, hospitality, and entrepreneurship.",
    image: projectPark,
  },
];

const companyCards = [
  { src: "/images/company1.jpg", alt: "Company 1", width: 188, height: 100 },
  { src: "/images/company2.jpg", alt: "Company 2", width: 188, height: 100 },
  { src: "/images/company3.jpg", alt: "Company 3", width: 188, height: 100 },
  { src: "/images/company4.jpg", alt: "Company 4", width: 188, height: 100 },
  { src: "/images/company5.png", alt: "Company 5", width: 188, height: 100 },
  { src: "/images/company6.jpg", alt: "Company 6", width: 188, height: 100 },
];

const stats = [
  {
    value: "2000+",
    label: "Graduates Trained",
    icon: "school",
    accent: "#1CA6A3",
    bar: "w-3/4",
  },
  {
    value: "1500+",
    label: "Job Placements",
    icon: "work",
    accent: "#74B4E0",
    bar: "w-11/12",
  },
  {
    value: "10+",
    label: "Industry Partners",
    icon: "handshake",
    accent: "#5FB673",
    bar: "w-2/3",
  },
  {
    value: "60+",
    label: "Projects Completed",
    icon: "construction",
    accent: "#1CA6A3",
    bar: "w-1/2",
  },
];

const workImages = [
  { src: projectPark, alt: "Students working on park beautification", span: "row-span-2" },
  { src: projectBuffalo, alt: "Students restoring Buffalo Soldiers monument" },
  { src: heroImage, alt: "Hands-on electrical training" },
];

const HomePage = () => (
  <div>
    {/* ─── Hero Section ─── */}
    <section className="relative min-h-[921px] max-w-[1280px] m-auto flex items-center overflow-hidden bg-surface">
      <FluidReveal>
        <div className="container-narrow grid md:grid-cols-12 gap-12 items-center relative z-10 w-full px-4 sm:px-6">
          <div className="md:col-span-7">
            <h1 className="headline-lg font-headline text-[#1CA6A3] leading-[1.1] tracking-tight mb-8">
              Build Skills.{" "}
              <span className="text-[#74B4E0]">Get Trained. </span>Get Hired.
            </h1>
            <p className="text-lg md:text-xl text-[#333333] max-w-xl mb-10 leading-relaxed">
              EITI prepares Detroit residents for real careers through hands-on
              training and direct pathways to employment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/programs"
                className="primary-button sm:px-5 sm:py-4 px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
              >
                Explore Programs
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden editorial-shadow bg-surface-container-lowest p-2">
              <img
                alt="EITI Training"
                className="w-full aspect-[4/5] object-cover rounded-xl"
                src={heroImage}
              />
            </div>
            <div className="absolute -bottom-px -left-2 md:-bottom-6 md:-left-6 bg-[#74B4E0] text-on-primary p-6 rounded-xl editorial-shadow max-w-[200px]">
              <div className="headline-lg font-headline font-black mb-1">94%</div>
              <div className="text-xs font-medium opacity-80 uppercase tracking-widest leading-tight">
                Job Placement Rate Post-Certification
              </div>
            </div>
          </div>
        </div>
      </FluidReveal>
    </section>

    {/* ─── What We Do ─── */}
    <section className="py-16 px-4 sm:py-20 sm:px-12 bg-gradient-to-r from-[#74B4E0] to-[#5FB673] max-w-[1280px] mx-auto rounded-sm">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row gap-10 w-full sm:gap-16 items-start">
          <div className="md:w-1/3">
            <h2 className="text-[32px] sm:text-[40px] font-medium text-[#333333] leading-10 tracking-normal mb-4">
              What We Do
            </h2>
            <h3 className="sm:text-xl mt-6 sm:mt-10 max-w-[400px] font-headline font-bold text-white leading-8 sm:leading-10">
              We're not just training. We're preparing people to work, earn, and
              build long-term careers
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="sm:text-xl text-lg text-on-surface-variant leading-relaxed mb-8">
              Emerging Industries Training Institute (EITI) equips Detroit
              residents with hands-on training, industry-recognized skills, and
              direct pathways into high-demand careers.
            </p>
            <div className="w-full flex flex-col items-start text-left">
              <p className="text-lg text-on-surface-variant pl-0">
                Our programs are built with employers in mind. That means what
                you learn here translates directly to the job site, the kitchen,
                or the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ─── Impact Stats ─── (replaces old Impact section) */}
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="container-narrow px-4 sm:px-6 mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-2xl font-bold text-[#1CA6A3] leading-10 mb-3">
            Our Impact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#333333] leading-tight">
            Real Training.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1CA6A3, #74B4E0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Real Outcomes.
            </span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative group rounded-2xl overflow-hidden bg-[#F7FAFA] border border-[#E0F0F0] p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${stat.accent}18 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${stat.accent}18` }}
              >
                <span
                  className="material-symbols-outlined text-2xl sm:text-3xl"
                  style={{ color: stat.accent }}
                >
                  {stat.icon}
                </span>
              </div>

              {/* Number */}
              <div
                className="text-4xl sm:text-5xl font-headline font-black mb-1 tracking-tight"
                style={{ color: stat.accent }}
              >
                {stat.value}
              </div>

              {/* Progress bar */}
              <div className="w-full bg-[#E0F0F0] h-1 rounded-full my-3">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${stat.bar}`}
                  style={{ backgroundColor: stat.accent }}
                />
              </div>

              {/* Label */}
              <div className="text-xs sm:text-sm font-semibold text-[#555] uppercase tracking-wider leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── Work Preview ─── (NEW section) */}
    <section className="py-16 sm:py-24 bg-[#F2F9F9] overflow-hidden">
      <div className="container-narrow px-4 sm:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-xs font-bold text-[#5FB673] uppercase tracking-[0.25em] mb-4">
              Projects & Community Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#333333] leading-tight mb-6">
              Training That Builds{" "}
              <span className="text-[#1CA6A3]">Real Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555] leading-relaxed mb-10 max-w-lg">
              Our students don't just learn in classrooms. They work on real
              projects that impact communities across Detroit — from restoring
              historic monuments to revitalizing green spaces.
            </p>
            <Link
              to="/work"
              className="inline-flex items-center gap-3 bg-[#1CA6A3] hover:bg-[#179490] text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              View Our Featured Projects
              <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Right: image mosaic */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 h-[420px] sm:h-[500px]">
            {/* Tall left image */}
            <div className="row-span-2 relative rounded-2xl overflow-hidden group">
              <img
                src={projectPark}
                alt="Students working on Virginia Park beautification"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1CA6A3]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white text-sm font-semibold">Virginia Park</span>
              </div>
            </div>

            {/* Top right */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={projectBuffalo}
                alt="Buffalo Soldiers monument restoration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#74B4E0]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white text-sm font-semibold">Buffalo Soldiers</span>
              </div>
            </div>

            {/* Bottom right */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={heroImage}
                alt="Hands-on EITI training session"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5FB673]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white text-sm font-semibold">Live Training</span>
              </div>

              {/* Floating badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-lg px-3 py-1.5 shadow-md">
                <span className="text-[10px] font-bold text-[#1CA6A3] uppercase tracking-wide">
                  Hands-On
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ─── Programs Snapshot ─── */}
    <section className="section-padding bg-surface">
      <div className="w-full px-4 sm:px-6 md:container-narrow md:mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-6">
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#333333] mb-4 text-left">
              Programs Snapshot
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group relative w-full rounded-xl overflow-hidden bg-white/80 backdrop-blur-md border border-white/20
                transition-all duration-500 ease-out
                hover:-translate-y-1 hover:scale-[1] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
                  bg-gradient-to-br from-[#1CA6A3]/20 via-transparent to-[#74B4E0]/20 blur-xl"
              />
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute -left-[120%] top-0 h-full w-[60%]
                    bg-gradient-to-r from-transparent via-white/40 to-transparent
                    skew-x-12 group-hover:left-[120%] transition-all duration-1000 ease-out"
                />
              </div>
              <div className="relative p-6 flex flex-col h-full">
                <h4 className="text-xl font-bold text-[#333] mb-2 transition-colors duration-300 group-hover:text-[#1CA6A3]">
                  {track.title}
                </h4>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  {track.description}
                </p>
                <Link to="/programs">
                  <button
                    className="mt-auto bg-[#1CA6A3] rounded-md py-3 px-4 text-white font-bold text-sm flex items-center gap-2
                      transition-all duration-300"
                  >
                    Learn More
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



    <WorkPreview />

    {/* ─── Partners ─── */}
    <section className="py-16 sm:py-24 bg-surface">
      <div className="container-narrow px-4 sm:px-6 mx-auto">
        <div className="text-center mb-12">
          <p className="sm:text-3xl text-lg font-medium text-[#333333] mb-8">
            Built With Industry Leaders
          </p>
        </div>
        <Slider images={companyCards} speed={30} />
      </div>
    </section>

    {/* ─── Final CTA ─── */}
    <CTA
      heading="Your Next Step Starts Here"
      description="Get the skills. Get the training. Get to work."
      buttonLabel="Apply Now"
      buttonLink="/apply"
    />


  </div>
);

export default HomePage;