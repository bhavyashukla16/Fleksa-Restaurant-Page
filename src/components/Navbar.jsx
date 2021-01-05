import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg food-nav">
      <img className="navbar-brand navbar-logo" 
        src="./Logo.jpg" alt="logo">
      </img>

      <div id="navbarSupportedContent">
            <a className="Menu" href="/#">
              Menu
            </a>
            <a className="Reservation" href="/#">
              Reservation
            </a>
            <a className="CallToAction" href="/#">
              Call to action
            </a>
            <a className="Login" href="/#">
              Login
            </a>
      </div>
    </nav>
  );
}

export default Navbar;
