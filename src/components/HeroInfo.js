import React from "react";

function HeroInfo(props) {
  return (
    <div className="info">
      <div className="row">
        <div className="col-6 col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Inicio Pre Oferta</div>
              <div className="card-date">01/09 | 8am</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Inicio Remate</div>
              <div className="card-date">07/09 | 9am</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroInfo;
