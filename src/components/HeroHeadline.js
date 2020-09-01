import React from "react";
import logoRusticos from "../assets/static/logo-rusticos.png";

function HeroHeadline(props) {
  return (
    <div className="headline">
      <div className="pretitle">8° Venta Anual</div>
      <div className="title">
        <img src={logoRusticos} alt="rusticos" className="img-fluid" />
        <h2>MÁXIMA SELECCIÓN GENÉTICA</h2>
      </div>
      <h3 className="subtitle">
        Registrate y participá de nuestro próximo remate televisado
      </h3>
    </div>
  );
}

export default HeroHeadline;
