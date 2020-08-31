import React from "react";

function Sale() {
  return (
    <div className="sale">
      <div className="container">
        {/* <h3 className="mb-5">ORDEN DE VENTA</h3> */}

        <div className="row ">
          <div className="col-md-3">
            <div className="sale-one">
              <div className="title">1320</div>
              <div className="subtitle">Reproductores Angus</div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
                <ul className="sale-list">
                  <li>
                    <div className="title">60</div>
                    <div className="subtitle">Toros Angus PP</div>
                  </li>
                  <li>
                    <div className="title">35</div>
                    <div className="subtitle">Toros Angus PC</div>
                  </li>
                  <li>
                    <div className="title">25</div>
                    <div className="subtitle">
                      Vaquillonas Angus PP
                      <small>con garantía de preñéz</small>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="sale-list">
                  <li>
                    <div className="title">600</div>
                    <div className="subtitle">
                      Vaquillonas PC
                      <small>paridas y con garantía de preñéz</small>
                    </div>
                  </li>
                  <li>
                    <div className="title">600</div>
                    <div className="subtitle">
                      Vaquillonas PC y Generales
                      <small>para madres</small>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="conditions">
          <div class="pay">importante plazo de pago</div>
          <div className="cards">tarjetas rurales</div>
          <div className="change">canje por cereal</div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
