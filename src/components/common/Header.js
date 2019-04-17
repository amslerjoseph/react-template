import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            to="/"
            className="nav-item nav-link"
            activeStyle={activeStyle}
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="nav-item nav-link"
            activeStyle={activeStyle}
            exact
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
