import React, { Component } from 'react';
import About from '../components/About';
import Auction from '../components/Auction';
import Hero from '../components/Hero';
import Suscription from '../components/Suscription';

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <Auction />
        <Suscription />
        <About />
        <div>cereales</div>
      </>
    );
  }
}

export default Home;
