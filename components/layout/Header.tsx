import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          to="/"
          className="brand"
          aria-label="Avanzora home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand__mark" aria-hidden="true">
            //
          </span>
          <span>AVANZORA</span>
        </Link>

        <div className="header-actions">
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav
            id="primary-navigation"
            className={`primary-navigation${menuOpen ? " is-open" : ""}`}
            aria-label="Main navigation"
          >
            <details className="nav-dropdown">
              <summary>
                Company <span className="chevron" aria-hidden="true" />
              </summary>
              <div className="nav-dropdown__menu">
                <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>
                  About us
                </NavLink>
                <NavLink to="/career" onClick={() => setMenuOpen(false)}>
                  Careers
                </NavLink>
                <NavLink to="/contact-us" onClick={() => setMenuOpen(false)}>
                  Contact us
                </NavLink>
              </div>
            </details>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "is-active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Projects <span className="new-badge">New</span>
            </NavLink>
            <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </NavLink>
            <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>
              About us
            </NavLink>
            <Link className="button button--primary nav-template" to="/contact-us">
              Contact Avanzora <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
