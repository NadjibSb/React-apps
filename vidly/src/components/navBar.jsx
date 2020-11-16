import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/movies" className="navbar-brand">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/movies" className="nav-item nav-link ">
              Movies
            </NavLink>
            <NavLink to="/customers" className="nav-item nav-link">
              Customers
            </NavLink>
            <NavLink to="rentals" className="nav-item nav-link">
              Rentals
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
