import Slider from "@/components/Slider";
import CTA from "@/components/ui/CTA";
import PageHero from "@/components/PageHero";

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
    value: "15+",
    label: "Years",
    description: "Training Detroit's workforce and connecting talent to opportunity.",
    icon: "calendar_month",
    color: "#1CA6A3"
  },
  {
    value: "93%",
    label: "Job Placement Rate",
    description: "Graduates move from training into real jobs. Fast.",
    icon: "work",
    color: "#74B4E0"
  },
  {
    value: "95%",
    label: "Retention Rate",
    description: "We don't just place people. We prepare them to last.",
    icon: "person_check",
    color: "#5FB673"
  },
  {
    value: "2,200+",
    label: "Careers Launched",
    description: "Thousands of Detroit residents now earning and building real futures.",
    icon: "rocket_launch",
    color: "#1CA6A3"
  }
];

const ImpactPage = () => (
  <div>
    <PageHero
      heading={
        <>
          Driving Opportunity Through{" "}
          <span
            style={{
              color: "#74B4E0",
              textShadow: "0 2px 20px rgba(0,0,0,0.3), 0 0 40px rgba(116,180,224,0.2)",
            }}
          >
            Training
          </span>
        </>
      }
      description="For over 15 years, EITI has been transforming lives through hands-on workforce training, connecting Detroit residents to meaningful careers in high-demand industries."
      buttonLabel="Partner With Us"
      buttonLink="/apply"
      backgroundImage="/images/impact-hero.jpg"
    />

    {/* ── Impact Stats ── */}
    <section className="relative mt-20 py-20 overflow-hidden" style={{ backgroundColor: "#EEF8F8" }}>
      {/* Grid bg pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(28,166,163,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(28,166,163,0.07) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "#1CA6A3", opacity: 0.08 }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "#74B4E0", opacity: 0.08 }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ backgroundColor: "rgba(28,166,163,0.1)", border: "1px solid rgba(28,166,163,0.2)" }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#1CA6A3]">By The Numbers</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-[#0D1F22] mb-8">
            Our <span style={{ color: "#1CA6A3" }}>Impact</span>
          </h2>
          <div className="h-1 w-20 rounded-full mx-auto bg-gradient-to-r from-[#1CA6A3] via-[#74B4E0] to-[#5FB673]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
              style={{
                border: `1px solid ${stat.color}25`,
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
              />
              {/* Ghost value behind content */}
              <div
                className="absolute inset-0 flex items-center justify-center font-headline font-black leading-none select-none pointer-events-none overflow-hidden"
                style={{ fontSize: "clamp(90px, 16vw, 130px)", color: stat.color, opacity: 0.04 }}
              >
                {stat.value}
              </div>
              {/* Bottom hover bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: stat.color }}
              />

              <div className="relative">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}25, ${stat.color}10)`,
                    border: `1px solid ${stat.color}20`,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color: stat.color, fontSize: "22px" }}>{stat.icon}</span>
                </div>
                <p
                  className="font-headline font-black mb-2 leading-none"
                  style={{ color: stat.color, fontSize: "clamp(40px, 6vw, 56px)" }}
                >
                  {stat.value}
                </p>
                <h3 className="text-sm font-bold text-[#0D1F22] mb-2">{stat.label}</h3>
                <p className="text-xs leading-relaxed text-[#666]">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Who We Serve ── */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ backgroundColor: "rgba(28,166,163,0.1)", border: "1px solid rgba(28,166,163,0.2)" }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1CA6A3]">Our Community</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-[#0D1F22] mb-6">
            Who We <span style={{ color: "#1CA6A3" }}>Serve</span>
          </h2>
          <p className="text-lg text-[#666] leading-relaxed">
            EITI serves Detroit residents who are ready to build a better future. We focus on individuals seeking opportunity, stability, and a clear path into the workforce.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: "groups", title: "Job Seekers", desc: "Individuals looking for stable employment in high-demand industries.", color: "#1CA6A3" },
            { icon: "school", title: "Career Changers", desc: "Professionals seeking to transition into skilled trades and new paths.", color: "#74B4E0" },
            { icon: "location_city", title: "Urban Residents", desc: "Detroit community members ready to upskill and unlock new opportunity.", color: "#5FB673" },
            { icon: "diversity_3", title: "Young Adults", desc: "Youth ready to begin their professional journey and build lasting careers.", color: "#1CA6A3" },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl p-8 overflow-hidden bg-white transition-all duration-500 hover:-translate-y-2"
              style={{
                boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
                border: `1px solid ${item.color}20`,
              }}
            >
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                style={{ backgroundColor: item.color }}
              />
              <div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <span className="material-symbols-outlined text-3xl" style={{ color: item.color }}>
                  {item.icon}
                </span>
              </div>
              <h3 className="relative text-xl font-headline font-bold text-[#0D1F22] mb-3">{item.title}</h3>
              <p className="relative text-sm text-[#666] leading-relaxed">{item.desc}</p>
              <div
                className="absolute bottom-0 left-0 right-0 h-1 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-b-3xl"
                style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}80)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── The Gap / The Solution ── */}
    <section className="py-10 sm:py-16 bg-[#F2F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

          {/* Left — The Challenge */}
          <div className="relative px-8 sm:px-12 lg:px-16 py-10" style={{ backgroundColor: "#0D1F22" }}>
            <div
              className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
              style={{ backgroundColor: "#1CA6A3", transform: "translate(-50%, -50%)" }}
            />
            <div className="relative max-w-lg">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#74B4E0] mb-6">The Challenge</p>
              <h2 className="text-4xl sm:text-5xl font-headline font-bold text-white mb-6 leading-[1.1]">
                The Gap Is{" "}
                <span style={{ color: "#74B4E0" }}>Real.</span>
              </h2>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                Too many capable individuals in Detroit lack access to training, resources, and pathways into sustainable careers. Economic barriers and limited industry-aligned education keep talent on the sidelines.
              </p>
              <div className="space-y-6">
                {[
                  { label: "Access Gap", desc: "Many capable people lack training pathways", pct: 75 },
                  { label: "Skills Gap", desc: "Employers struggle to find qualified workers", pct: 60 },
                  { label: "Opportunity Gap", desc: "Workforce potential goes unrealized", pct: 45 },
                ].map((gap, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-white">{gap.label}</span>
                      <span className="text-sm font-bold" style={{ color: "#74B4E0" }}>{gap.pct}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${gap.pct}%`, background: "linear-gradient(90deg, #74B4E0, #74B4E060)" }}
                      />
                    </div>
                    <p className="text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>{gap.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — The Solution */}
          <div
            className="relative px-8 sm:px-12 lg:px-16 py-10"
            style={{ background: "linear-gradient(135deg, #1CA6A3 0%, #158a88 60%, #0f7a77 100%)" }}
          >
            <div
              className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: "#5FB673", transform: "translate(30%, 30%)" }}
            />
            <div className="relative max-w-lg">
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                EITI's Solution
              </p>
              <h2 className="text-4xl sm:text-5xl font-headline font-bold text-white mb-6 leading-[1.1]">
                So Is the{" "}
                <span style={{ color: "#0D1F22" }}>Solution.</span>
              </h2>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                EITI bridges the gap — hands-on education, employer-aligned training, and direct connections to opportunity for every Detroit resident ready to work.
              </p>
              <div className="space-y-3">
                {[
                  { icon: "handshake", label: "Employer Partnerships", desc: "Direct connections to hiring employers" },
                  { icon: "construction", label: "Hands-On Training", desc: "Real skills learned in real environments" },
                  { icon: "trending_up", label: "Proven Outcomes", desc: "93% job placement, 95% retention rate" },
                  { icon: "groups", label: "Community Focus", desc: "Built for Detroit, by Detroit" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-white/10"
                    style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                    >
                      <span className="material-symbols-outlined text-white">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{item.label}</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Partners Section */}
    <section className="py-16 sm:py-24 bg-white">
      <div className="container-narrow px-4 sm:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#333333] leading-tight mb-4">
            Our <span className="text-[#1CA6A3]">Partners</span>
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto">
            Working together to expand access and impact.
          </p>
        </div>
        <Slider images={companyCards} speed={30} />
      </div>
    </section>

    <CTA
      heading="Partner With Us"
      description="Help us expand access to training, create jobs, and strengthen Detroit's workforce."
      buttonLabel="Apply Now"
      buttonLink="/apply"
    />
  </div>
);

export default ImpactPage;
