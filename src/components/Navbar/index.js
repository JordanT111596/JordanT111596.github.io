import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/react-portfolio/">
        Jordan Triplett
        </Link>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks"
      aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse w-100 order-3" id="navbarLinks"> */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to="/react-portfolio/"
              className={window.location.pathname === "/react-portfolio/" ? "nav-link active" : "nav-link"}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
