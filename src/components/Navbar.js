import React from "react";

import Logotipo from "../assets/static/logo-alfredosmondino.svg";
import IconHeadset from "../assets/static/headset-solid.svg";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logotipo} alt="logo" className="logo" />
        </a>
        <div className="phone ml-auto">
          <img src={IconHeadset} alt="headst" className="headset" />
          <h6>+54 351 650 9975</h6>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
