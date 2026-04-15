import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "Impact", to: "/impact" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Apply Now", to: "/apply" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" >
          <img src="/images/logo.jpg" alt="logo" className="h-[70px] w-[150px]" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-headline tracking-tight font-bold text-sm transition-colors ${
                location.pathname === link.to
                  ? "text-[#1CA6A3] border-b-2 border-[#1CA6A3] pb-1"
                  : "text-[#ED9C6] hover:text-primary"
              }`}
              aria-current={location.pathname === link.to ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/apply"
          className="hidden md:inline-flex bg-[#1CA6A3] text-white px-6 py-2.5 rounded-xl font-bold text-sm inner-glow hover:opacity-80 transition-all duration-300 active:scale-95"
        >
          Apply Today
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md border-b border-outline-variant overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 pb-6 pt-2 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block text-sm font-bold font-headline py-2 ${
                location.pathname === link.to ? "text-primary" : "text-on-surface-variant"
              }`}
              aria-current={location.pathname === link.to ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/apply"
            onClick={() => setOpen(false)}
            className="block w-full bg-tertiary-container text-on-tertiary-container px-6 py-2.5 rounded-xl font-bold text-sm text-center inner-glow hover:opacity-80 transition-all"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
