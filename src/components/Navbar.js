import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold"
      : "hover:text-yellow-300 transition";

  return (
    <nav className="bg-green-700 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          🌱 Smart Farm
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={linkClasses}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClasses}>
              Contact
            </NavLink>
          </li>

          {/* CTA Button */}
          <li>
            <Link
              to="/contact"
              className="bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Get Quote
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-green-800 px-6 py-4 space-y-4">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)} className={linkClasses}>
            Services
          </NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClasses}>
            Contact
          </NavLink>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-300 transition"
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
