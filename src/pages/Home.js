import React, { Component } from 'react';
import About from '../components/About';
import Auction from '../components/Auction';
import Cereals from '../components/Cereals';
import Hero from '../components/Hero';
import Suscription from '../components/Suscription';

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <Auction />
        <Suscription />
        <Cereals />
        <About />
      </>
    );
  }
}

export default Home;
