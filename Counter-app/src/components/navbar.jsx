import React from "react";

// Stateless Functionnal Component
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default Navbar;
