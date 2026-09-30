import type { ReactElement } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import type { NavItem } from "../../types";

const navItems: readonly NavItem[] = [
    { to: "/", label: "About Me" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
];

export const Navbar = (): ReactElement => {
    const [navOpen, setNavOpen] = useState(false);
    const closeNav = (): void => setNavOpen(false);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-4">
            <Link className="navbar-brand" to="/" onClick={closeNav}>
                Jordan Triplett
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarLinks"
                aria-expanded={navOpen}
                aria-label="Toggle navigation"
                onClick={() => setNavOpen((open) => !open)}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse${navOpen ? " show" : ""}`} id="navbarLinks">
                <ul className="navbar-nav ms-auto">
                    {navItems.map(({ to, label }) => (
                        <li className="nav-item" key={to}>
                            {/* NavLink applies the "active" class itself, so the highlight follows client-side navigation */}
                            <NavLink to={to} end className="nav-link" onClick={closeNav}>
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
