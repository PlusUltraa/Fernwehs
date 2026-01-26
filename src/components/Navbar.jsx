import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            FERNWEHS
          </Link>
        </div>

        <div className="nav-center-tagline">
          The New You
        </div>

        {/* DESKTOP LINKS (RIGHT) */}
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/journey">Journey</Link>
          <Link to="/csr">Impact(CSR)</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* CLOSE BUTTON */}
            <button
              className="close-btn"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              ✕
            </button>

            {/* MOBILE LINKS */}
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
            <Link to="/journey" onClick={closeMenu}>
              Journey
            </Link>
            <Link to="/csr">Impact</Link>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}