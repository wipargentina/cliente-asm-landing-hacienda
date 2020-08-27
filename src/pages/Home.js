import React, { Component } from "react";
import Header from "../components/Header";
import Information from "../components/Information";
import About from "../components/About";
import Cta from "../components/Cta";
import Calendar from "../components/Calendar";
import Suscription from "../components/Suscription";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabledInformation: true,
    };
  }

  render() {
    const enabledInformation = this.state.enabledInformation;
    return (
      <>
        <Header />
        {!enabledInformation ? null : <Information enabledInformation />}
        <About />
        <Cta />
        <Calendar />
        <Suscription />
      </>
    );
  }
}

export default Home;
