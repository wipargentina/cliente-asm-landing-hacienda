import React from "react";
import Form from "./Form";

function Hero(props) {
  return (
    <div className="hero">
      <div className="darken">darken</div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="headline">
                <h1>Remate Establecimiento Rústico</h1>
                <h2>
                  Registrate y participá en la Pre Oferta de nuestro próximo
                  remate ganadero por Canal Rural
                </h2>
              </div>
            </div>
            <div className="col-md-4">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
