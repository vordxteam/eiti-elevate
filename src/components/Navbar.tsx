import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "Impact", to: "/impact" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  // const hasHero = location.pathname !== "/apply";
  // const hasHero =
  // location.pathname !== "/apply" &&
  // location.pathname !== "/virginia-park";
  const hasHero = 
  location.pathname !== "/apply" &&
  location.pathname !== "/virginia-park" &&
  location.pathname !== "/pole-barn";
  

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-0   w-full z-50 transition-all duration-300 ${
        scrolled || !hasHero ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}>
        <div className="flex justify-between items-center px-8 py-1 max-w-7xl mx-auto">
          <Link to="/">
            {/* <img src="/images/Eiti.png" alt="logo" className="h-[60px] w-[130px]" />
             */}
             {scrolled || !hasHero ? <img src="/images/eiti-black.png" alt="logo" className="h-[50px] w-[140px]" /> : <img src="/images/eiti-white.png" alt="logo" className="h-[50px] w-[140px]" />}
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-headline tracking-tight font-bold text-sm transition-colors ${
                  location.pathname === link.to
                    ? scrolled || !hasHero
                      ? "text-[#1CA6A3] border-b-2 border-[#1CA6A3]"
                      : "text-white border-b-2 border-white"
                    : scrolled || !hasHero
                      ? "text-[#ED9C6] hover:text-primary"
                      : "text-white/80 hover:text-white"
                }`}
                aria-current={location.pathname === link.to ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/apply"
            className="hidden md:inline-flex bg-[#1CA6A3] text-white px-6 py-2.5 rounded-xl font-bold text-sm inner-glow hover:bg-[#179490] hover:shadow-[#1CA6A3]/30 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
          >
            Apply Today
          </Link>

          {/* Mobile toggle */}
          <button
            className={`md:hidden z-[60] relative transition-colors ${scrolled || !hasHero ? "text-on-surface" : "text-white"}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 bg-white z-[60]  flex flex-col transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <img src="/images/logo.png" alt="logo" className="h-10 w-auto" />
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-[#1CA6A3] transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-col px-6 py-6 space-y-1 flex-grow">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block text-sm font-bold font-headline py-3 px-3 rounded-lg transition-colors ${
                location.pathname === link.to
                  ? "text-[#1CA6A3] bg-[#F2F9F9]"
                  : "text-[#333] hover:text-[#1CA6A3] hover:bg-[#F2F9F9]"
              }`}
              aria-current={location.pathname === link.to ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="px-6 py-6 border-t border-gray-100">
          <Link
            to="/apply"
            onClick={() => setOpen(false)}
            className="block w-full bg-[#1CA6A3] text-white px-6 py-3 rounded-xl font-bold text-sm text-center hover:bg-[#179490] hover:shadow-[#1CA6A3]/30 transition-all"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;