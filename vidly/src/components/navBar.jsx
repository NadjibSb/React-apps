import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/movies" className="navbar-brand">
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/movies" className="nav-item nav-link active">
              Movies <span className="sr-only">(current)</span>
            </Link>
            <Link to="/customers" className="nav-item nav-link">
              Customers
            </Link>
            <Link to="rentals" className="nav-item nav-link">
              Rentals
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
