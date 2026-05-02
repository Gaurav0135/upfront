import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="section-shell flex flex-col items-start justify-between gap-3 text-sm text-slate-400 sm:flex-row sm:items-center">
        <p>Copyright {new Date().getFullYear()} Upfront. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/services" className="hover:text-brand-300">
            Services
          </Link>
          <Link to="/portfolio" className="hover:text-brand-300">
            Portfolio
          </Link>
          <Link to="/contact" className="hover:text-brand-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
