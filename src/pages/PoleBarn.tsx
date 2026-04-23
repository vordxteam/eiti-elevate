
import { useEffect, useRef, useState } from "react";

// ── Brand palette ──
const teal = "#1CA6A3";
const blue = "#74B4E0";
const dark = "#333333";
const darkTeal = "#0d3d3c";
const bg = "#f8fffe";
const line = "#e6f2f1";
const muted = "#6b7280";

// ── Icons ──
const MapPinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const CalendarIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);
const BuildingIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M12 14h.01M8 14h.01M16 14h.01" />
  </svg>
);
const UsersIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const CheckCircleIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
  </svg>
);
const AwardIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
const ClockIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const HeartIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const SparkleIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
  </svg>
);
const ArrowIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

// ── Fade-in on scroll ──
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// ── Centered section heading ──
const SectionHeading = ({ eyebrow, title, color = teal }: { eyebrow: string; title: string; color?: string }) => (
  <div className="mb-10 text-center">
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="h-px w-8" style={{ background: color }} />
      <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color }}>
        {eyebrow}
      </span>
      <div className="h-px w-8" style={{ background: color }} />
    </div>
    <h2
      className="text-3xl sm:text-4xl font-bold leading-tight"
      style={{ color: darkTeal, letterSpacing: "-0.02em" }}
    >
      {title}
    </h2>
  </div>
);

// ── Data ──
const stats = [
  { icon: <UsersIcon />, value: "20", label: "Participants Trained" },
  { icon: <CheckCircleIcon />, value: "18", label: "Successfully Completed" },
  { icon: <AwardIcon />, value: "4", label: "Certifications" },
  { icon: <ClockIcon />, value: "On Time", label: "On Budget" },
];

const certs = [
  "OSHA-30",
  "Contractor Supervisor Asbestos Abatement",
  "Lead Worker",
  "Solar Technician",
];

const projectMeta = [
  { icon: <MapPinIcon />, label: "Location", value: "Detroit, MI" },
  { icon: <BuildingIcon />, label: "Client / Partner", value: "Carhartt / Buffalo Soldiers Heritage Association" },
  { icon: <CalendarIcon />, label: "Timeline", value: "Nov 2024 – Aug 2025" },
];

const focusTags = [
  "Workforce Development",
  "Construction Training",
  "Community Engagement",
  "Infrastructure Development",
];

const results = [
  { num: "20", label: "Participants enrolled in hands-on construction training", color: teal },
  { num: "18", label: "Participants successfully completed the program", color: blue },
  { num: "4", label: "Industry certifications earned by participants", color: teal },
  { num: "On Time", label: "Project delivered on schedule and on budget", color: blue },
];

export default function PoleBarn() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        color: dark,
        background: bg,
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      {/* ── soft decorative background blobs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[520px] h-[520px] rounded-full opacity-[0.07]"
        style={{
          background: `radial-gradient(circle at center, ${teal}, transparent 70%)`,
          transform: "translate(35%, -35%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[600px] left-0 w-[460px] h-[460px] rounded-full opacity-[0.06]"
        style={{
          background: `radial-gradient(circle at center, ${blue}, transparent 70%)`,
          transform: "translate(-40%, 0)",
        }}
      />

      {/* ─────────────────── HERO ─────────────────── */}
      <section className="relative pt-28 sm:pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            {/* eyebrow badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
              style={{
                background: "#fff",
                border: `1px solid ${teal}33`,
                boxShadow: `0 2px 10px -2px ${teal}22`,
              }}
            >
              <span style={{ color: teal }}>
                <SparkleIcon />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: teal }}>
                Case Study
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.05] mb-8"
              style={{ color: darkTeal, letterSpacing: "-0.025em" }}
            >
              Pole Barn Construction
              <br />
              <span
                className="relative inline-block"
                style={{
                  background: `linear-gradient(135deg, ${teal} 0%, ${blue} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Buffalo Soldiers Heritage Association
              </span>
            </h1>

            <p
              className="text-lg leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ color: muted }}
            >
              A hands-on construction training initiative that built permanent community infrastructure while opening skilled-trades career pathways for Detroit residents.
            </p>

            {/* meta row */}
            <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 pt-2">
              {[
                { icon: <MapPinIcon />, text: "Detroit, MI" },
                { icon: <BuildingIcon />, text: "Carhartt / Buffalo Soldiers Heritage Association" },
                { icon: <CalendarIcon />, text: "11/2024 – 08/2025" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2" style={{ color: muted }}>
                  <span style={{ color: blue }}>{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────── HERO IMAGE (Image 1) ─────────────────── */}
      <section className="relative max-w-5xl mx-auto px-6 mb-16 sm:mb-20">
        <FadeIn delay={0.1}>
          <div className="relative">
            {/* soft glow behind image */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
              style={{
                background: `linear-gradient(135deg, ${teal}, ${blue})`,
                transform: "scale(0.96)",
              }}
            />
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                height: "clamp(260px, 45vw, 480px)",
                border: `1px solid ${line}`,
                boxShadow: "0 25px 60px -25px rgba(13, 61, 60, 0.25)",
              }}
            >
              <img src="/images/pole1.jpeg" alt="Pole Barn Project" className="w-full h-full object-cover" />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ─────────────────── STATS BAR ─────────────────── */}
      <section className="relative max-w-5xl mx-auto px-6 mb-20 sm:mb-24">
        <FadeIn>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#fff",
              border: `1px solid ${line}`,
              boxShadow: "0 4px 20px -8px rgba(13, 61, 60, 0.1)",
            }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-7 text-center transition-colors hover:bg-[#f8fffe]"
                  style={{
                    borderRight: i < stats.length - 1 ? `1px solid ${line}` : "none",
                    borderBottom: i < 2 ? `1px solid ${line}` : "none",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${teal}15, ${blue}15)`,
                      color: teal,
                    }}
                  >
                    {s.icon}
                  </div>
                  <p
                    className="text-3xl sm:text-[2rem] font-bold mb-1"
                    style={{ color: darkTeal, letterSpacing: "-0.02em" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: muted }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ─────────────────── MAIN CONTENT ─────────────────── */}
      <div className="relative max-w-4xl mx-auto px-6 pb-24 space-y-20 sm:space-y-24">

        {/* ── PROJECT OVERVIEW ── */}
        <FadeIn>
          <div
            className="rounded-2xl p-7 sm:p-9"
            style={{
              background: "#fff",
              border: `1px solid ${line}`,
              boxShadow: "0 4px 20px -10px rgba(13, 61, 60, 0.08)",
            }}
          >
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-7 sm:gap-8 pb-7 mb-7"
              style={{ borderBottom: `1px solid ${line}` }}
            >
              {projectMeta.map((item, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2" style={{ color: teal }}>
                    {item.icon}
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em]">
                      {item.label}
                    </p>
                  </div>
                  <p className="text-base font-semibold" style={{ color: dark }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] mb-4" style={{ color: teal }}>
                Program Focus
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {focusTags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: `${blue}12`,
                      color: "#2a6a9a",
                      border: `1px solid ${blue}33`,
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: blue }} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── THE CHALLENGE ── */}
        <section>
          <FadeIn>
            <SectionHeading eyebrow="01 — Context" title="The Challenge" />
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="space-y-5 text-[15.5px] leading-[1.8] text-center max-w-3xl mx-auto" style={{ color: "#4b5563" }}>
              <p>
                Community-based organizations often face significant barriers when attempting to develop physical infrastructure that supports their programming and long-term sustainability. One such need emerged through the Buffalo Soldiers Heritage Association, which sought to construct a pole barn facility to support its programming, storage needs, and community engagement activities. While the project represented an important investment in the organization's ability to serve the community, the cost and complexity associated with new construction created challenges for completing the project within available resources.
              </p>
              <p>
                Construction projects of this nature require coordination of funding, materials, skilled labor, permitting, and compliance with safety and construction standards. For many nonprofit organizations, accessing the necessary financial and technical resources to complete such projects can be difficult, often delaying or preventing important infrastructure improvements.
              </p>
              <p>
                Recognizing both the community need and the opportunity to support workforce training, Carhartt convened partners and provided funding support to advance the construction of the pole barn for the Buffalo Soldiers Heritage Association. This investment created an opportunity to simultaneously address a community infrastructure need while providing hands-on training opportunities for individuals pursuing careers in the skilled trades.
              </p>
            </div>
          </FadeIn>

          {/* Image 2 */}
          <FadeIn delay={0.1}>
            <div
              className="mt-12 mx-auto rounded-2xl overflow-hidden"
              style={{
                height: "clamp(240px, 38vw, 380px)",
                border: `1px solid ${line}`,
                boxShadow: "0 12px 35px -15px rgba(13, 61, 60, 0.18)",
              }}
            >
              <img src="/images/pole2.jpeg" alt="Pole Barn Challenge" className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        </section>

        {/* ── EITI'S APPROACH ── */}
        <section>
          <FadeIn>
            <SectionHeading eyebrow="02 — Solution" title="EITI's Approach" color={blue} />
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="space-y-5 text-[15.5px] leading-[1.8] text-center max-w-3xl mx-auto" style={{ color: "#4b5563" }}>
              <p>
                To support the successful completion of the pole barn project while creating meaningful workforce development opportunities, Emerging Industry Training Institute implemented a hands-on construction training initiative centered around the development of the pole barn structure for the Buffalo Soldiers Heritage Association. The project served as a live training environment where participants could gain real-world experience in carpentry, structural framing, jobsite coordination, and construction safety while contributing to the development of a permanent community asset.
              </p>
              <p>
                EITI structured the project to reflect professional construction practices, ensuring that all work adhered to applicable permitting requirements, insurance coverage, and construction safety standards. Participants were guided by experienced instructors who provided technical instruction and jobsite supervision throughout the project. This approach allowed trainees to apply classroom-based learning within an active construction environment, strengthening both their technical skills and their readiness for employment within the construction industry.
              </p>
            </div>
          </FadeIn>

          {/* Image 3 */}
          <FadeIn delay={0.1}>
            <div
              className="mt-12 mx-auto rounded-2xl overflow-hidden"
              style={{
                height: "clamp(240px, 38vw, 380px)",
                border: `1px solid ${line}`,
                boxShadow: "0 12px 35px -15px rgba(13, 61, 60, 0.18)",
              }}
            >
              <img src="/images/pole3.jpeg" alt="EITI Approach" className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        </section>

        {/* ── RESULTS ── */}
        <section>
          <FadeIn>
            <SectionHeading eyebrow="03 — Outcomes" title="Results" />
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {results.map((r, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 flex items-center gap-5 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#fff",
                    border: `1px solid ${line}`,
                    boxShadow: "0 2px 10px -4px rgba(13, 61, 60, 0.08)",
                  }}
                >
                  <div
                    className="flex-shrink-0 rounded-xl flex items-center justify-center font-bold text-lg"
                    style={{
                      minWidth: 80,
                      height: 64,
                      background: `${r.color}10`,
                      color: r.color,
                      letterSpacing: "-0.02em",
                      padding: "0 10px",
                    }}
                  >
                    {r.num}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Certifications */}
          <FadeIn delay={0.1}>
            <div
              className="rounded-2xl p-7 text-center"
              style={{
                background: `linear-gradient(135deg, ${teal}08, ${blue}08)`,
                border: `1px solid ${teal}22`,
              }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: teal }}>
                Certifications Earned
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {certs.map((c, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5"
                    style={{
                      background: "#fff",
                      color: darkTeal,
                      border: `1.5px solid ${teal}33`,
                      boxShadow: "0 2px 6px rgba(28,166,163,0.08)",
                    }}
                  >
                    <span style={{ color: teal }}>
                      <CheckCircleIcon size={16} />
                    </span>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── PROJECT GALLERY (Images 4 & 5) ── */}
        <section>
          <FadeIn>
            <SectionHeading eyebrow="04 — Gallery" title="On the Ground" color={blue} />
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { src: "/images/pole4.jpeg", label: "Construction Site" },
                { src: "/images/pole5.jpeg", label: "Completed Structure" },
              ].map((img, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    height: "clamp(240px, 32vw, 320px)",
                    border: `1px solid ${line}`,
                    boxShadow: "0 4px 14px -6px rgba(13, 61, 60, 0.1)",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
                    style={{
                      background: "linear-gradient(to top, rgba(13,61,60,0.75) 0%, transparent 55%)",
                    }}
                  >
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-sm font-semibold">{img.label}</span>
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ─────────────────── HEARTFELT CLOSING ─────────────────── */}
        <FadeIn>
          <div className="relative pt-4">
            {/* decorative top divider with heart */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div
                className="h-px w-20 sm:w-28"
                style={{ background: `linear-gradient(to right, transparent, ${teal}55)` }}
              />
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  background: "#fff",
                  border: `1.5px solid ${teal}33`,
                  color: teal,
                  boxShadow: `0 4px 14px -4px ${teal}44`,
                }}
              >
                <HeartIcon size={18} />
              </div>
              <div
                className="h-px w-20 sm:w-28"
                style={{ background: `linear-gradient(to left, transparent, ${teal}55)` }}
              />
            </div>

            {/* heartfelt content */}
            <div className="text-center max-w-2xl mx-auto">
              <p
                className="text-xs font-bold uppercase tracking-[0.22em] mb-6"
                style={{ color: teal }}
              >
                Why It Matters
              </p>

              <h2
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6"
                style={{ color: darkTeal, letterSpacing: "-0.025em" }}
              >
                Beyond the beams,{" "}
                <span
                  style={{
                    background: `linear-gradient(135deg, ${teal} 0%, ${blue} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  futures framed.
                </span>
              </h2>

              <p
                className="text-base sm:text-[17px] leading-[1.8] mb-10"
                style={{ color: "#4b5563" }}
              >
                This wasn't just a barn raised from the ground up — it was a community legacy preserved, a nonprofit's capacity expanded, and twenty Detroiters stepping onto jobsites with real tools in their hands and real credentials in their pockets. Every post set, every truss lifted, and every certification earned is a foundation poured for someone's future in the skilled trades.
              </p>

              {/* signature-style stats */}
              <div
                className="inline-flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 gap-y-5 px-8 sm:px-10 py-6 rounded-2xl"
                style={{
                  background: "#fff",
                  border: `1px solid ${line}`,
                  boxShadow: "0 8px 30px -12px rgba(13, 61, 60, 0.12)",
                }}
              >
                {[
                  { v: "20", l: "Trained" },
                  { v: "18", l: "Completed" },
                  { v: "4", l: "Certifications" },
                ].map((s, i, arr) => (
                  <div key={i} className="flex items-center gap-x-10 sm:gap-x-14">
                    <div className="text-center">
                      <p
                        className="text-2xl sm:text-3xl font-bold"
                        style={{ color: darkTeal, letterSpacing: "-0.02em" }}
                      >
                        {s.v}
                      </p>
                      <p
                        className="text-[11px] mt-1 font-semibold uppercase tracking-[0.16em]"
                        style={{ color: muted }}
                      >
                        {s.l}
                      </p>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="h-10 w-px" style={{ background: line }} />
                    )}
                  </div>
                ))}
              </div>

              {/* closing tagline */}
              <p
                className="mt-10 text-sm font-medium italic"
                style={{ color: teal }}
              >
                Real training. Real outcomes. Real community.
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
