import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="header-main">
      <div className="navbar">

        {/* Brand */}
        <div className="brandname">
          <span>Photography Institute</span>
        </div>

        {/* Navigation */}
        <div className="navbar-container">
          <ul className="nav-links">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/instructors">Instructors</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/classes">Classes</ActiveLink>
            </li>
          </ul>
        </div>

        {/* Auth Button */}
        <div className="search">
          <Link to="/login">
            <button className="button-primary rounded-2xl">
              Sign In
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NavBar;
