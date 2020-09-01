import React from "react";
import logoCanalRural from "../assets/static/logo-canal-rural.png";

function HeroInfo(props) {
  return (
    <div className="info">
      <div className="row">
        <div className="col-md-7">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Inicio del Remate</div>
              <div className="card-date">
                Lunes 7 de Septiembre. <br /> 13.30 horas
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title">En Vivo por</div>
              <div className="card-logo">
                <img
                  src={logoCanalRural}
                  alt="canal rural"
                  className="logo-canal-rural"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroInfo;
