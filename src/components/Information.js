import React, { Component } from "react";
import InformationItem from "./InformationItem";

import items from "../data/information.json";

export default class Information extends Component {
  render() {
    return (
      <div className="information">
        <div className="container">
          <h3 className="mb-5">Información del remate</h3>
          <InformationItem items={items.data} />
        </div>
      </div>
    );
  }
}
