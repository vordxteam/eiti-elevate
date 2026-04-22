import { useEffect, useRef, useState } from "react";

const teal = "#1CA6A3";
const blue = "#74B4E0";
const dark = "#333333";

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);
const BuildingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M12 14h.01M8 14h.01M16 14h.01" />
  </svg>
);
const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
  </svg>
);
const AwardIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  );
};

const SectionLabel = ({ color = teal, text }: { color?: string; text: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-1 h-9 rounded-full flex-shrink-0" style={{ background: color }} />
    <h2 className="text-2xl font-bold" style={{ color: dark, letterSpacing: "-0.01em" }}>{text}</h2>
  </div>
);

const stats = [
  { icon: <UsersIcon />, value: "50", label: "Participants Trained" },
  { icon: <CheckCircleIcon />, value: "50", label: "Successfully Completed" },
  { icon: <AwardIcon />, value: "3", label: "Certifications Earned" },
  { icon: <ClockIcon />, value: "On Time", label: "On Budget & Schedule" },
];

const certs = ["OSHA-30", "Contractor Supervisor Asbestos Abatement", "Lead Worker"];

const projectMeta = [
  { icon: <MapPinIcon />, label: "Location", value: "Detroit, MI" },
  { icon: <BuildingIcon />, label: "Client / Partner", value: "Herman Keifer Development" },
  { icon: <CalendarIcon />, label: "Timeline", value: "June 2024 – Present" },
];

const focusTags = ["Workforce Development", "Construction Training", "Community Engagement", "Residential Rehabilitation"];

export default function VirginiaCaseStudy() {
  return (
    <div className="mt-15 min-h-screen" style={{ color: dark, background: "#f8fffe", fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>

      {/* ── HERO ── */}
      <section className="py-14 mt-20 pb-10">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: "#0d3d3c", letterSpacing: "-0.02em" }}>
              Virginia Park Neighborhood<br />
              <span style={{ color: teal }}>Beautification</span>
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { icon: <MapPinIcon />, text: "Detroit, MI" },
                { icon: <BuildingIcon />, text: "Herman Keifer Development" },
                { icon: <CalendarIcon />, text: "06/2024 – Present" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2" style={{ color: "#555" }}>
                  <span style={{ color: blue }}>{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="max-w-4xl mx-auto px-6 mb-14">
        <FadeIn delay={0.05}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="rounded-2xl p-5 text-center shadow-sm border hover:shadow-md transition-shadow" style={{ background: "#fff", borderColor: "#e0f3f3" }}>
                <div className="w-11 h-11 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: `${teal}12`, color: teal }}>
                  {s.icon}
                </div>
                <p className="text-2xl font-bold mb-0.5" style={{ color: teal }}>{s.value}</p>
                <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "#999" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── MAIN CENTERED CONTENT ── */}
      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-14">

        {/* ── PROJECT OVERVIEW CARD (horizontal, full-width) ── */}
        <FadeIn delay={0.05}>
          <div className="rounded-2xl p-6 shadow-sm" style={{ background: "#fff", border: `1px solid #e0f3f3` }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: teal }}>Project Overview</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              {projectMeta.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="mt-0.5 flex-shrink-0" style={{ color: teal }}>{item.icon}</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#aaa" }}>{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: dark }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t" style={{ borderColor: "#f0f0f0" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: teal }}>Program Focus</p>
              <div className="flex flex-wrap gap-2">
                {focusTags.map((tag, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: `${blue}15`, color: "#2a6a9a", border: `1px solid ${blue}30` }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: blue }} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── THE CHALLENGE ── */}
        <FadeIn>
          <SectionLabel text="The Challenge" />
          <div className="space-y-4" style={{ color: "#555" }}>
            <p className="text-base leading-relaxed">
              The proposed redevelopment of the Herman Kiefer Complex presented both a major opportunity and a significant challenge for the surrounding Virginia Park neighborhood. While the project has the potential to stimulate long-term economic growth, increase property values, and bring new investment into the area, many local residents face barriers that prevent them from directly benefiting from that development. At the same time, nearby housing stock requires substantial rehabilitation, and employers in the construction and building trades continue to report a shortage of trained entry-level workers.
            </p>
            <p className="text-base leading-relaxed">
              The objective of the project, from a community workforce perspective, was to ensure that neighborhood residents were not only witnessing redevelopment but actively participating in it. This meant creating a pathway that connected local talent to real training opportunities, hands-on experience, and industry-recognized credentials while also contributing to neighborhood stabilization through residential rehabilitation and community engagement.
            </p>
          </div>
        </FadeIn>

        {/* Image 1 */}
        <FadeIn delay={0.08}>
          <div className="rounded-2xl overflow-hidden shadow-sm" style={{ height: 340, border: `1px solid #e0f3f3` }}>
            <img src="/images/virgina1.jpeg" alt="Virginia Park Challenge" className="w-full h-full object-cover" />
          </div>
        </FadeIn>

        {/* ── EITI'S APPROACH ── */}
        <FadeIn>
          <SectionLabel color={blue} text="EITI's Approach" />
          <div className="space-y-4" style={{ color: "#555" }}>
            <p className="text-base leading-relaxed">
              Emerging Industries Training Institute (EITI) implemented a place-based workforce development model centered in the Virginia Park neighborhood and directly connected to the broader redevelopment activity surrounding the Herman Kiefer Complex. Rather than separating training from real-world application, the program used active residential rehabilitation projects in the neighborhood as training sites, allowing participants to build practical construction skills while improving housing conditions in the same community in which many of them live.
            </p>
            <p className="text-base leading-relaxed">
              The approach combined hands-on construction training, industry-recognized credentials, leadership development, and community engagement. Participants received structured instruction in safety, framing, drywall, and other core construction skills while also taking part in neighborhood beautification efforts and free community workshops for residents. This model addressed multiple challenges simultaneously: it created a pipeline of trained workers, strengthened community trust, improved local housing conditions, and ensured that redevelopment translated into meaningful opportunity for neighborhood residents rather than displacement.
            </p>
          </div>
        </FadeIn>

        {/* Image 2 */}
        <FadeIn delay={0.08}>
          <div className="rounded-2xl overflow-hidden shadow-sm" style={{ height: 340, border: `1px solid #e0f3f3` }}>
            <img src="/images/virgina2.jpeg" alt="EITI Approach" className="w-full h-full object-cover" />
          </div>
        </FadeIn>

        {/* ── RESULTS ── */}
        <FadeIn>
          <SectionLabel text="Results" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { num: "50 / 50", label: "Participants trained and successfully completed", color: teal },
              { num: "100%", label: "Completion rate achieved across all enrolled participants", color: blue },
              { num: "3", label: "Industry certifications earned by participants", color: teal },
              { num: "On Time", label: "Project delivered on schedule and on budget", color: blue },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-5 flex items-center gap-4" style={{ background: `${r.color}09`, border: `1.5px solid ${r.color}22` }}>
                <div className="text-2xl font-bold flex-shrink-0" style={{ color: r.color, minWidth: 76 }}>{r.num}</div>
                <p className="text-sm leading-snug" style={{ color: "#666" }}>{r.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-6" style={{ background: `${teal}08`, border: `1.5px solid ${teal}20` }}>
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: teal }}>Certifications Earned</p>
            <div className="flex flex-wrap gap-3">
              {certs.map((c, i) => (
                <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "#fff", color: teal, border: `1.5px solid ${teal}30`, boxShadow: "0 1px 4px rgba(28,166,163,0.08)" }}>
                  ✓ {c}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Image 3 */}
        <FadeIn delay={0.08}>
          <div className="rounded-2xl overflow-hidden shadow-sm" style={{ height: 320, border: `1px solid #e0f3f3` }}>
            <img src="/images/virgina3.jpeg" alt="Results" className="w-full h-full object-cover" />
          </div>
        </FadeIn>

        {/* ── GALLERY ── */}
        <FadeIn delay={0.05}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-9 rounded-full" style={{ background: teal }} />
            <h2 className="text-2xl font-bold" style={{ color: dark }}>Project Gallery</h2>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { src: "/images/virgina4.jpg", label: "Site View" },
              // { src: "/images/virgina5.jpeg", label: "Community Workshop" },
            ].map((img, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-shadow" style={{ height: 260, border: `1px solid #e0f3f3` }}>
                <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5" style={{ background: "linear-gradient(to top, rgba(28,166,163,0.65), transparent)" }}>
                  <p className="text-white text-sm font-semibold">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── IMPACT BAND ── */}
        <FadeIn delay={0.05}>
          <div className="rounded-3xl p-10 text-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, #0d3d3c 0%, #1CA6A3 100%)` }}>
            <div className="absolute top-0 right-0 w-56 h-56 rounded-full opacity-10" style={{ background: "#74B4E0", transform: "translate(25%,-25%)" }} />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full opacity-10" style={{ background: "#fff", transform: "translate(-25%,25%)" }} />
            <p className="relative text-3xl font-bold mb-2" style={{ color: "#fff", letterSpacing: "-0.02em" }}>"Real Training. Real Outcomes."</p>
            <p className="relative text-sm max-w-lg mx-auto mb-8" style={{ color: "rgba(255,255,255,0.72)" }}>
              Connecting Virginia Park residents to meaningful careers while revitalizing their community from the inside out.
            </p>
            <div className="relative flex justify-center gap-10">
              {[{ v: "50", l: "Trained" }, { v: "100%", l: "Completed" }, { v: "3", l: "Certs" }].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold" style={{ color: "#74B4E0" }}>{s.v}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}