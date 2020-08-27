import React from "react";
import logoWip from "../assets/static/wip-white.svg";

function Footer(props) {
  return (
    <footer className="footer">
      <img src={logoWip} alt="wip" className="wip" />
    </footer>
  );
}

export default Footer;
