import React from "react";

import Logotipo from "../assets/static/logo-alfredosmondino.svg";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand mx-auto" href="/">
          <img src={Logotipo} alt="logo" className="logo" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
