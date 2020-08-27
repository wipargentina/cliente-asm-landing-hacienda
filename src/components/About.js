import React from "react";
import items from "../data/about.json";
import Gallery from "./Gallery";

function About() {
  return (
    <div className="about">
      <div className="container">
        <h3 className="text-primary">Alfredo S. Mondino</h3>
        <h4 className="mb-1">Desde 1982 Generando Confinanza</h4>
        <p className="mb-5">
          Nos dedicamos a la consignacion de hacienda bovina y la venta de
          insumos para el agro.
        </p>
        <Gallery photos={items.data} />
      </div>
    </div>
  );
}

export default About;
