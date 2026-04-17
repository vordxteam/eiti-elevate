import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Sun, Hammer, ChefHat, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import projectPark from "@/assets/project-park.jpg";
import projectBuffalo from "@/assets/project-buffalo.jpg";
import Slider from "@/components/Slider";
import PageHero from "@/components/PageHero";
import CTA from "@/components/ui/CTA";
import WorkPreview from "@/components/home/WorkPreview";
import ImpactSection from "@/components/home/Impact";
import ProjectsSection from "@/components/home/ProjectSection";

const tracks = [
  {
    title: "Residential Electrical Training",
    category: "Industrial",
    description:
      "Learn the fundamentals of residential wiring, circuitry, and safety while preparing for careers in the electrical trades.",
    image: projectPark,
    icon: Zap,
    accent: "#1CA6A3",
  },
  {
    title: "Renewable Energy – Solar Technician Training",
    category: "Green Energy",
    description:
      "Train for careers in renewable energy through hands-on experience with solar installation and energy systems.",
    image: projectBuffalo,
    icon: Sun,
    accent: "#74B4E0",
  },
  {
    title: "Framing & Structural Carpentry Training",
    category: "Construction",
    description:
      "Build real-world construction skills including framing, layout, and blueprint reading for residential and commercial projects.",
    image: heroImage,
    icon: Hammer,
    accent: "#5FB673",
  },
  {
    title: "Culinary Training",
    category: "Hospitality",
    description:
      "Develop professional kitchen skills and prepare for careers in food service, hospitality, and entrepreneurship.",
    image: projectPark,
    icon: ChefHat,
    accent: "#1CA6A3",
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
  {
    src: projectPark,
    alt: "Students working on park beautification",
    span: "row-span-2",
  },
  { src: projectBuffalo, alt: "Students restoring Buffalo Soldiers monument" },
  { src: heroImage, alt: "Hands-on electrical training" },
];

// ─── Premium 3D Tilt Card Component ───
interface TiltCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
}

const TiltCard = ({
  number,
  title,
  subtitle,
  description,
  accent,
}: TiltCardProps) => {
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg)",
  );
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    );
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      className="relative group cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div
        className="relative overflow-hidden bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 transition-all duration-200 ease-out"
        style={{
          transform: transform,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? `0 25px 50px -12px ${accent}40, 0 0 0 1px ${accent}30`
            : "0 10px 40px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5)",
        }}
      >
        {/* Subtitle */}
        <p
          className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
          style={{ color: accent, transform: "translateZ(20px)" }}
        >
          {subtitle}
        </p>

        {/* Title */}
        <h3
          className="text-2xl sm:text-3xl font-headline font-bold mb-4 leading-tight"
          style={{ color: "#0D1F22", transform: "translateZ(25px)" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: "#64748b", transform: "translateZ(15px)" }}
        >
          {description}
        </p>

        {/* Animated Accent Line */}
        <div
          className="absolute bottom-0 left-0 h-1 rounded-full transition-all duration-500 ease-out"
          style={{
            background: `linear-gradient(90deg, ${accent}, ${accent}80)`,
            width: isHovered ? "100%" : "0%",
            transform: "translateZ(10px)",
          }}
        />

        {/* Floating particles on hover */}
        {isHovered && (
          <>
            <div
              className="absolute w-2 h-2 rounded-full animate-ping"
              style={{
                background: accent,
                top: "20%",
                right: "10%",
                animationDuration: "2s",
                transform: "translateZ(40px)",
              }}
            />
            <div
              className="absolute w-1.5 h-1.5 rounded-full animate-ping"
              style={{
                background: accent,
                bottom: "30%",
                right: "20%",
                animationDuration: "2.5s",
                animationDelay: "0.3s",
                transform: "translateZ(35px)",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

// ─── What We Do Section ───
const WhatWeDoSection = () => {
  const cards = [
    {
      number: "01",
      title: "Career-Focused Training",
      subtitle: "More than training",
      description:
        "We're not just training. We're preparing people to work, earn, and build long-term careers.",
      accent: "#1CA6A3",
    },
    {
      number: "02",
      title: "Skills That Open Doors",
      subtitle: "Hands-on learning",
      description:
        "EITI provides hands on training, certified skills, and career pathways for Detroit’s high-demand industries.",
      accent: "#74B4E0",
    },
    {
      number: "03",
      title: "Built With Employers in Mind",
      subtitle: "Job-ready skills",
      description:
        "Employer driven programs that teach practical, job ready skills directly applicable in real workplace.",
      accent: "#5FB673",
    },
  ];

  return (
    <section
      className="relative mt-10 py-20 overflow-hidden"
      style={{ backgroundColor: "#EEF8F8" }}
    >
      {/* Grid bg pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(28,166,163,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(28,166,163,0.07) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "#1CA6A3", opacity: 0.08 }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "#74B4E0", opacity: 0.08 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              backgroundColor: "rgba(28,166,163,0.1)",
              border: "1px solid rgba(28,166,163,0.2)",
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: "#1CA6A3" }}
            >
              Our Approach
            </p>
          </div>
          <h2 className="text-4xl text-[#333333] sm:text-5xl md:text-6xl font-headline font-bold mb-6">
            What We Do
          </h2>
          <div className="flex justify-center">
            <div
              className="h-1 w-24 rounded-full"
              style={{
                background: "linear-gradient(90deg, #1CA6A3, #74B4E0, #5FB673)",
              }}
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {cards.map((card, index) => (
            <TiltCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => (
  <div>
    <PageHero
      heading={
        <>
          Build Skills.{" "}
          <span
            style={{
              color: "#1CA6A3",
              textShadow:
                "0 2px 20px rgba(0,0,0,0.3), 0 0 40px rgba(116,180,224,0.2)",
            }}
          >
            Get Trained.{" "}
          </span>
          Get Hired.
        </>
      }
      description="EITI prepares Detroit residents for real careers through hands-on training and direct pathways to employment."
      buttonLabel="Explore Programs"
      buttonLink="/programs"
    />

    {/* ─── What We Do ─── Premium 3D Cards */}
    <WhatWeDoSection />
    <ImpactSection />
    <ProjectsSection />

    {/* ─── Programs Snapshot ─── Premium Cards with Lucide Icons */}
    <section className="py-20 bg-gradient-to-b from-[#F8FAFA] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1CA6A3]/10 mb-6">
            <Sparkles size={16} className="text-[#1CA6A3]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CA6A3]">
              Career Pathways
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-[#0D1F22] mb-4">
            Programs Snapshot
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#1CA6A3] via-[#74B4E0] to-[#5FB673]" />
          </div>
        </div>

        {/* Premium Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {tracks.map((track, index) => {
            const IconComponent = track.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden bg-white border border-[#E0F0F0] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(28,166,163,0.15)] flex flex-col h-full"
              >
                {/* Content Area - flex-1 pushes button to bottom */}
                <div className="flex-1 p-8 pb-4">
                  {/* Icon Container */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: `${track.accent}15` }}
                  >
                    <IconComponent
                      size={28}
                      strokeWidth={1.5}
                      style={{ color: track.accent }}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Category Badge */}
                  <div
                    className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
                    style={{
                      backgroundColor: `${track.accent}15`,
                      color: track.accent,
                    }}
                  >
                    {track.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-headline font-bold text-[#0D1F22] mb-3 leading-tight group-hover:text-[#1CA6A3] transition-colors duration-300">
                    {track.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#64748b] leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* Bottom Action Area - always at bottom */}
                <div className="relative px-8 pb-8 pt-2 mt-auto">
                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3"
                    style={{ color: track.accent }}
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  {/* Animated underline */}
                  <div
                    className="absolute bottom-8 left-8 h-0.5 rounded-full transition-all duration-500 w-0 group-hover:w-20"
                    style={{ backgroundColor: track.accent }}
                  />
                </div>

                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${track.accent}10 0%, transparent 70%)`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* View All Programs CTA */}
        <div className="text-center mt-16">
          <Link
            to="/programs"
            className="inline-flex items-center gap-3 bg-[#1CA6A3] hover:bg-[#179490] hover:shadow-[#1CA6A3]/30 hover:-translate-y-0.5 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl  group"
          >
            View All Programs
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>

    <WorkPreview />

    {/* ─── Partners ─── */}
    <section className="py-10 sm:py-20 bg-surface">
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
