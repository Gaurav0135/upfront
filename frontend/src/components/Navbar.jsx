import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Why Us", href: "/why-us" },
  { name: "Contact", href: "/contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-gradient-to-r from-slate-950 via-slate-950 to-slate-900 backdrop-blur-xl shadow-lg shadow-blue-500/10">
      <nav className="section-shell flex h-20 items-center justify-between">
        <Link
          to="/"
          onClick={closeMenu}
          className="font-display text-2xl font-bold tracking-tight text-white bg-transparent p-0 hover:text-brand-300 transition"
        >
          Upfront
        </Link>

        <button
          className="rounded-lg border border-slate-700 p-2 text-slate-200 hover:border-brand-400 hover:text-brand-300 transition md:hidden"
          onClick={() => setOpen((state) => !state)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden items-center gap-8 text-base text-slate-300 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`bg-transparent p-0 font-medium transition hover:text-brand-300 ${
                  location.pathname === link.href ? "text-brand-300 border-b-2 border-brand-300 pb-1" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3 font-semibold text-white transition hover:from-brand-400 hover:to-brand-500 shadow-lg hover:shadow-brand-500/50"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="border-t border-slate-800/70 bg-gradient-to-b from-slate-950/98 to-slate-900/98 backdrop-blur-lg md:hidden">
          <ul className="section-shell flex flex-col gap-3 py-6 text-base text-slate-300">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={closeMenu}
                  className={`block bg-transparent p-3 text-left font-medium transition rounded-lg hover:bg-slate-800/50 hover:text-brand-300 ${
                    location.pathname === link.href ? "text-brand-300 bg-slate-800/30" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3 font-semibold text-white text-center transition hover:from-brand-400 hover:to-brand-500 shadow-lg hover:shadow-brand-500/50"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
