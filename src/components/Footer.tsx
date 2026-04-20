import React, { useState, useCallback } from "react";
import {
  MapPin,
  Mail,
  Globe,
  Phone,
  Clock,
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

// ─── Data ─────────────────────────────────────────────

const navLinks = [
  [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Our Work", href: "/work" },
  ],
  [
    { label: "Our impact", href: "/impact" },
    { label: "Apply", href: "/apply" },
  ],
];

const socials = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter / X" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

// ─── Component ─────────────────────────────────────────

const Footer: React.FC = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[#0D1F22]">


      {/* Background Effects */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-10 bg-[#1CA6A3]" />
      <div className="pointer-events-none absolute top-10 right-0 w-72 h-72 rounded-full blur-3xl opacity-10 bg-[#74B4E0]" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Brand ── */}
          <div>
            <div className="mb-5">
              <span className="text-4xl font-extrabold text-[#1CA6A3]">EITI</span>
              <div className="mt-1 h-0.5 w-12 bg-gradient-to-r from-[#1CA6A3] to-[#74B4E0]" />
            </div>

            <p className="text-white text-sm font-semibold mb-1">
              Emerging Industries Training Institute
            </p>
            <p className="text-sm text-[#74B4E0] mb-5">Detroit, Michigan</p>

            <p className="text-sm text-slate-400 pl-4 border-l-2 border-[#1CA6A3]">
              Workforce training and employment pathways for emerging industries.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-8">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  onMouseEnter={() => setHoveredSocial(label)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor:
                      hoveredSocial === label
                        ? "#1CA6A3"
                        : "rgba(255,255,255,0.06)",
                    color:
                      hoveredSocial === label ? "#fff" : "#74B4E0",
                    transform:
                      hoveredSocial === label ? "translateY(-2px)" : "none",
                    boxShadow:
                      hoveredSocial === label
                        ? "0 4px 16px rgba(28,166,163,0.4)"
                        : "none",
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Links ── */}
          <div>
            <h3 className="text-xs font-bold uppercase mb-6 text-[#1CA6A3]">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-4">
              {navLinks.map((col, i) => (
                <ul key={i} className="space-y-3">
                  {col.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200"
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#ffffff")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#94a3b8")
                        }
                      >
                        <span className="w-1 h-1 rounded-full bg-[#1CA6A3] transition-all duration-200 group-hover:w-2" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* ── Contact ── */}
          <div>
            <h3 className="text-xs font-bold uppercase mb-6 text-[#1CA6A3]">
              Contact Us
            </h3>

            <ul className="space-y-5">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#1CA6A3]" />
                <div>
                  <p className="text-white text-sm font-medium">
                    5555 Conner Street, Suite 1646
                  </p>
                  <p className="text-sm text-slate-400">Detroit, MI 48213</p>
                </div>
              </li>

              {[ 
                { icon: Mail, text: "info@eitinstitute.org", href: "mailto:info@eitinstitute.org" },
                { icon: Globe, text: "trainandemploy.org", href: "https://trainandemploy.org" },
                { icon: MapPin, text: "313.469.0581", href: "tel:3134690581" },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-[#1CA6A3]" />
                  <a
                    href={href}
                    className="text-sm text-slate-400 transition-colors duration-200"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#74B4E0")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#94a3b8")
                    }
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Hours ── */}
          <div>
            <h3 className="text-xs font-bold uppercase mb-6 text-[#1CA6A3]">
              Office Hours
            </h3>

            <div className="rounded-xl p-5 mb-7 border border-[#1CA6A3]/20 bg-gradient-to-br from-[#1CA6A3]/10 to-[#74B4E0]/10 backdrop-blur-lg">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#1CA6A3]" />
                <span className="text-sm font-semibold text-white">
                  Monday – Friday
                </span>
              </div>

              <p className="text-2xl font-bold text-[#74B4E0]">
                9:00 am – 4:00 pm
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-[#1CA6A3] animate-pulse" />
                Currently open
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 mb-8 h-px bg-gradient-to-r from-transparent via-[#1CA6A3]/40 via-[#74B4E0]/40 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">

          <p>© 2026 Emerging Industries Training Institute</p>

          {/* Back to top (hover restored) */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 transition-all duration-200"
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#1CA6A3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#475569")
            }
          >
            Back to top
            <span className="flex items-center justify-center w-7 h-7 rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#1CA6A3] group-hover:-translate-y-0.5">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;