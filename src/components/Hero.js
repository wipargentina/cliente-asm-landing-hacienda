import React from "react";
import Form from "./Form";

import HeroInfo from "./HeroInfo";
import HeroHeadline from "./HeroHeadline";

function Hero(props) {
  return (
    <div className="hero">
      <div className="darken"></div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <HeroHeadline />
              <HeroInfo />
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
