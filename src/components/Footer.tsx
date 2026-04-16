
import React, { useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
  </svg>
);

// Social icons
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

// ─── Nav Links ────────────────────────────────────────────────────────────────

const navLinks: { label: string; href: string }[][] = [
  [
    { label: "Home",        href: "/" },
    { label: "About Us",    href: "/about" },
    { label: "Programs",    href: "/programs" },
    { label: "Our Work",    href: "/work" },
  ],
  [
    { label: "Admissions",  href: "/admissions" },
    { label: "Partners",    href: "/partners" },
    { label: "Careers",     href: "/careers" },
    { label: "Contact",     href: "/contact" },
  ],
];

const socials = [
  { icon: <FacebookIcon />, href: "#", label: "Facebook" },
  { icon: <TwitterIcon />,  href: "#", label: "Twitter / X" },
  { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
  { icon: <InstagramIcon />,href: "#", label: "Instagram" },
];

// ─── Component ────────────────────────────────────────────────────────────────

const Footer: React.FC = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0D1F22" }}
    >
      {/* ── Top gradient bar ── */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, #1CA6A3 0%, #74B4E0 50%, #1CA6A3 100%)" }}
      />

      {/* ── Decorative glows ── */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: "radial-gradient(circle, #1CA6A3, transparent)" }}
      />
      <div
        className="pointer-events-none absolute top-10 right-0 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ background: "radial-gradient(circle, #74B4E0, transparent)" }}
      />

      {/* ── Subtle grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ══════════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════════ */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Column 1 : Brand ── */}
          <div className="lg:col-span-1">
            {/* Wordmark */}
            <div className="mb-5">
              <span
                className="text-4xl font-extrabold tracking-tight"
                style={{ color: "#1CA6A3" }}
              >
                EITI
              </span>
              <div
                className="mt-1 h-0.5 w-12 rounded-full"
                style={{ background: "linear-gradient(90deg, #1CA6A3, #74B4E0)" }}
              />
            </div>

            <p className="text-white font-semibold text-sm mb-1">
              Emerging Industries Training Institute
            </p>
            <p className="text-sm mb-5" style={{ color: "#74B4E0" }}>
              Detroit, Michigan
            </p>

            {/* Tagline */}
            <p
              className="text-sm leading-relaxed pl-4 border-l-2"
              style={{ color: "#94a3b8", borderColor: "#1CA6A3" }}
            >
              Workforce training and employment pathways for emerging industries.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor:
                      hoveredSocial === s.label
                        ? "#1CA6A3"
                        : "rgba(255,255,255,0.06)",
                    color:
                      hoveredSocial === s.label ? "#ffffff" : "#74B4E0",
                    transform:
                      hoveredSocial === s.label ? "translateY(-2px)" : "none",
                    boxShadow:
                      hoveredSocial === s.label
                        ? "0 4px 16px rgba(28,166,163,0.4)"
                        : "none",
                  }}
                  onMouseEnter={() => setHoveredSocial(s.label)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Column 2 : Quick Links ── */}
          <div className="lg:col-span-1">
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "#1CA6A3" }}
            >
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-4">
              {navLinks.map((col, ci) => (
                <ul key={ci} className="space-y-3">
                  {col.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-2 text-sm transition-colors duration-200"
                        style={{ color: "#94a3b8" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#ffffff")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#94a3b8")
                        }
                      >
                        <span
                          className="block w-1 h-1 rounded-full transition-all duration-200 group-hover:w-2"
                          style={{ backgroundColor: "#1CA6A3" }}
                        />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* ── Column 3 : Contact ── */}
          <div className="lg:col-span-1">
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "#1CA6A3" }}
            >
              Contact Us
            </h3>

            <ul className="space-y-5">
              {/* Address */}
              <li className="flex items-start gap-3">
                <span className="mt-0.5" style={{ color: "#1CA6A3" }}>
                  <MapPinIcon />
                </span>
                <div>
                  <p className="text-sm text-white font-medium leading-snug">
                    5555 Conner Street, Suite 1646
                  </p>
                  <p className="text-sm" style={{ color: "#94a3b8" }}>
                    Detroit, MI 48213
                  </p>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <span style={{ color: "#1CA6A3" }}>
                  <MailIcon />
                </span>
                <a
                  href="mailto:info@eitinstitute.org"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#94a3b8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#74B4E0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94a3b8")
                  }
                >
                  info@eitinstitute.org
                </a>
              </li>

              {/* Website */}
              <li className="flex items-center gap-3">
                <span style={{ color: "#1CA6A3" }}>
                  <GlobeIcon />
                </span>
                <a
                  href="https://trainandemploy.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#94a3b8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#74B4E0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94a3b8")
                  }
                >
                  trainandemploy.org
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <span style={{ color: "#1CA6A3" }}>
                  <PhoneIcon />
                </span>
                <a
                  href="tel:3134690581"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#94a3b8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#74B4E0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94a3b8")
                  }
                >
                  313.469.0581
                </a>
              </li>
            </ul>
          </div>

          {/* ── Column 4 : Office Hours + CTA ── */}
          <div className="lg:col-span-1">
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "#1CA6A3" }}
            >
              Office Hours
            </h3>

            {/* Hours card */}
            <div
              className="rounded-xl p-5 mb-7"
              style={{
                background:
                  "linear-gradient(135deg, rgba(28,166,163,0.12), rgba(116,180,224,0.08))",
                border: "1px solid rgba(28,166,163,0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span style={{ color: "#1CA6A3" }}>
                  <ClockIcon />
                </span>
                <span className="text-sm font-semibold text-white">
                  Monday – Friday
                </span>
              </div>
              <p
                className="text-2xl font-bold tracking-tight"
                style={{ color: "#74B4E0" }}
              >
                9:00 am – 4:00 pm
              </p>
              <div
                className="mt-3 flex items-center gap-2 text-xs"
                style={{ color: "#94a3b8" }}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "#1CA6A3" }}
                />
                Currently open
              </div>
            </div>

            {/* CTA button */}
            <a
              href="/contact"
              className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white text-sm font-semibold transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #1CA6A3, #74B4E0)",
                boxShadow: "0 4px 20px rgba(28,166,163,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 6px 28px rgba(28,166,163,0.55)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 4px 20px rgba(28,166,163,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              Get In Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className="mt-14 mb-8 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(28,166,163,0.4), rgba(116,180,224,0.4), transparent)",
          }}
        />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs order-2 sm:order-1" style={{ color: "#475569" }}>
            © 2026 Emerging Industries Training Institute. All rights reserved.
          </p>

          <div
            className="flex items-center gap-1 text-xs order-3 sm:order-2"
            style={{ color: "#475569" }}
          >
            <a
              href="/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="mx-2">·</span>
            <a
              href="/terms"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Use
            </a>
            <span className="mx-2">·</span>
            <a
              href="/accessibility"
              className="hover:text-white transition-colors duration-200"
            >
              Accessibility
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="order-1 sm:order-3 flex items-center gap-2 text-xs transition-all duration-200 group"
            style={{ color: "#475569" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color = "#1CA6A3")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color = "#475569")
            }
          >
            Back to top
            <span
              className="flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 group-hover:border-[#1CA6A3] group-hover:-translate-y-0.5"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              <ArrowUpIcon />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
