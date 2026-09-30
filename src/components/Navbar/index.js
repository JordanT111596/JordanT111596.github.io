import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "About Me" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/" onClick={() => setNavOpen(false)}>
        Jordan Triplett
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarLinks"
        aria-expanded={navOpen}
        aria-label="Toggle navigation"
        onClick={() => setNavOpen(!navOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse${navOpen ? " show" : ""}`} id="navbarLinks">
        <ul className="navbar-nav ms-auto">
          {links.map(({ to, label }) => (
            <li className="nav-item" key={to}>
              {/* NavLink applies the "active" class itself, so the highlight follows client-side navigation */}
              <NavLink to={to} end className="nav-link" onClick={() => setNavOpen(false)}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
