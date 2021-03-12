import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {

  const [navCollapse, setNavCollapse] = useState(true);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      {/* Tab linking to the home/about me page but with my name displayed */}
      <Link className="navbar-brand" to="/react-portfolio/">
        Jordan Triplett
      </Link>
      {/* A button to toggle the navbar to a hamburger on the right side of the page when the screen becomes smaller (e.x. on a mobile phone) */}
      <button className="navbar-toggler" type="button" aria-expanded="false" onClick={() => setNavCollapse(!navCollapse)}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={(navCollapse ? 'collapse' : '') + ' navbar-collapse w-100 order-3'} id="navbarLinks">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {/* Tab linking to the home/about me page */}
            <Link
              to="/react-portfolio/"
              // If the current page is the home page, this will change to the active class to highlight the choice, if not, it will be greyed out
              className={window.location.pathname === "/react-portfolio/" ? "nav-link active" : "nav-link"}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            {/* Tab linking to the portfolio page */}
            <Link
              to="/portfolio"
              // If the current page is the portfolio page, this will change to the active class to highlight the choice, if not, it will be greyed out
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            {/* Tab linking to the contact me/email page */}
            <Link
              to="/contact"
              // If the current page is the contact page, this will change to the active class to highlight the choice, if not, it will be greyed out
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
