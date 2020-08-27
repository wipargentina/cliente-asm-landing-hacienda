import React from "react";

import Logotipo from "../assets/static/logo-alfredosmondino.svg";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logotipo} alt="logo" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
