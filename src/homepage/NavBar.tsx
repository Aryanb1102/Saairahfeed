import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/quiz", label: "Quizzes & Games" },
  { to: "/crossword", label: "Crossword" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="hp-nav">
      <div className="hp-nav-inner">
        {/* Hamburger */}
        <button
          type="button"
          className="hp-hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={`hp-hamburger-bar ${menuOpen ? "hp-bar-open" : ""}`} />
          <span className={`hp-hamburger-bar ${menuOpen ? "hp-bar-open" : ""}`} />
          <span className={`hp-hamburger-bar ${menuOpen ? "hp-bar-open" : ""}`} />
        </button>

        {/* Logo */}
        <Link to="/" className="hp-logo" aria-label="Saairahfeed home">
          Saairahfeed
        </Link>

        {/* Desktop links */}
        <nav className="hp-desktop-links" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hp-desktop-link ${
                location.pathname === link.to ? "hp-desktop-link-active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/quiz" className="hp-nav-cta">
          Play Quizzes
        </Link>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="hp-mobile-drawer" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hp-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
