import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header-main">
      <div className="navbar">
        {/* Brand */}
        <div className="brandname">
          <span>Photography Institute</span>
        </div>

        {/* Nav links */}
        <div className="navbar-container">
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructors">Instructors</NavLink>
            </li>
            <li>
              <NavLink to="/classes">Classes</NavLink>
            </li>
          </ul>
        </div>

        {/* Auth button */}
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

export default Navbar;
