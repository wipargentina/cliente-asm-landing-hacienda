import React, { Component } from "react";

export default class Information extends Component {
  render() {
    return (
      <div className="information">
        <h1>Información del remate</h1>
        <p>
          Este bloque lo disponibilizamos en caso de que haya mas información
          del remate, como por ejemplo detalle del lote, cantidad de toros,
          vacas, razas etc..
        </p>
      </div>
    );
  }
}
