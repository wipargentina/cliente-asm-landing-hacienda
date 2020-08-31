import React, { Component } from "react";
import Header from "../components/Header";
import Information from "../components/Information";
import About from "../components/About";
import Cta from "../components/Cta";
import Calendar from "../components/Calendar";
import Suscription from "../components/Suscription";
import Sale from "../components/Sale";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabledInformation: false,
      enabledSale: true,
      enabledAbout: true,
      enabledCta: false,
      enabledCalendar: false,
      enabledSuscription: true,
    };
  }

  render() {
    return (
      <>
        <Header />
        {!this.state.enabledInformation ? null : <Information />}
        {!this.state.enabledSale ? null : <Sale />}
        {!this.state.enabledAbout ? null : <About />}
        {!this.state.enabledCta ? null : <Cta />}
        {!this.state.enabledCalendar ? null : <Calendar />}
        {!this.state.enabledSuscription ? null : <Suscription />}
      </>
    );
  }
}

export default Home;
