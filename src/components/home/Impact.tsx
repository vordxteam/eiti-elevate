
import { useEffect, useRef, useState } from "react";
import { Users, TrendingUp, Award, ShieldCheck } from "lucide-react";

const stats = [
  {
    value: 12000,
    displaySuffix: "+",
    isThousand: true,
    label: "Professionals Trained",
    accent: "#1CA6A3",
    iconBg: "#E6F9F8",
    icon: Users,
    gradDir: "90deg, #1CA6A3, #74B4E0",
  },
  {
    value: 94,
    displaySuffix: "%",
    isThousand: false,
    label: "Course Completion Rate",
    accent: "#74B4E0",
    iconBg: "#EAF4FC",
    icon: TrendingUp,
    gradDir: "90deg, #74B4E0, #1CA6A3",
  },
  {
    value: 200,
    displaySuffix: "+",
    isThousand: false,
    label: "Expert Instructors",
    accent: "#1CA6A3",
    iconBg: "#E6F9F8",
    icon: Award,
    gradDir: "90deg, #1CA6A3, #74B4E0",
  },
  {
    value: 98,
    displaySuffix: "%",
    isThousand: false,
    label: "Satisfaction Score",
    accent: "#74B4E0",
    iconBg: "#EAF4FC",
    icon: ShieldCheck,
    gradDir: "90deg, #74B4E0, #1CA6A3",
  },
];

function easeOutQuart(t: number) {
  return 1 - --t * t * t * t;
}

function useCountUp(target: number, isThousand: boolean, triggered: boolean, delay: number) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {

    if (!triggered) {
      setDisplay("0"); // Reset on exit
      return;
    }
    const timeout = setTimeout(() => {
      const duration = 1800;
      let start: number | null = null;
      const step = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const val = Math.round(easeOutQuart(p) * target);
        setDisplay(isThousand ? (val / 1000).toFixed(val < target ? 1 : 0) + "K" : String(val));
        if (p < 1) requestAnimationFrame(step);
        else setDisplay(isThousand ? target / 1000 + "K" : String(target));
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [triggered, target, isThousand, delay]);

  return display;
}

function StatCard({
  stat,
  index,
  triggered,
}: {
  stat: (typeof stats)[0];
  index: number;
  triggered: boolean;
}) {
  const Icon = stat.icon;
  const display = useCountUp(stat.value, stat.isThousand, triggered, index * 120 + 300);

  return (
    <div
      className="relative group rounded-[20px] border-[1.5px] border-[#E0F0F0] bg-white flex flex-col items-center text-center overflow-hidden
        transition-all duration-500 ease-out
        p-7 sm:p-8"
      style={{
        opacity: triggered ? 1 : 0,
        transform: triggered ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s, border-color 0.3s, box-shadow 0.3s`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#1CA6A3";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(28,166,163,0.10)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#E0F0F0";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px]"
        style={{ background: `linear-gradient(${stat.gradDir})` }}
      />

      {/* Icon */}
      <div
        className="w-13 h-13 rounded-[14px] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: stat.iconBg, width: 52, height: 52 }}
      >
        <Icon size={22} strokeWidth={2} color={stat.accent} />
      </div>

      {/* Animated number */}
      <div
        className="font-black leading-none mb-2 tabular-nums"
        style={{
          color: stat.accent,
          fontSize: "clamp(2rem, 5vw, 2.75rem)",
        }}
      >
        {display}
        {stat.displaySuffix}
      </div>

      {/* Divider */}
      <div
        className="w-7 h-0.5 rounded-full mb-2.5"
        style={{ backgroundColor: stat.accent }}
      />

      {/* Label */}
      <div className="text-[11px] sm:text-[12px] font-bold text-[#888] uppercase tracking-widest leading-snug">
        {stat.label}
      </div>
    </div>
  );
}

export default function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
        } else {
          setTriggered(false); // Reset when out of view
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden" ref={sectionRef}>
      <div className="container-narrow px-4 sm:px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold tracking-[0.14em] uppercase text-[#1CA6A3] mb-2.5">
            Our Impact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#1a1a1a] leading-tight">
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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} triggered={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
}