import React from "react";

import logoRustico from "../assets/static/logo-rusticos.png";
import logoCanalRural from "../assets/static/logo-canal-rural.png";

function HeroLogos(props) {
  return (
    <div className="logos">
      <div className="row">
        {/* <div className="col-6 col-md-4">
          <img src={logoRustico} alt="logo" className="img-fluid" />
        </div> */}
        <div className="col-6 col-md-4">
          <img src={logoCanalRural} alt="logo" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default HeroLogos;
