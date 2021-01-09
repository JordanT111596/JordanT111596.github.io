import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

//Serves as my "header" for assignment requirements

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/react-portfolio/">
        Jordan Triplett
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/react-portfolio/"
              className={
                window.location.pathname === "/react-portfolio/" || window.location.pathname === "/about" || window.location.pathname ==="/" ? "nav-link active" : "nav-link"}
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
      </div>
    </nav>
  );
}

export default Navbar;
