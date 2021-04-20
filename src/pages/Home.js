import React from 'react';
import About from '../components/About';
import Cereals from '../components/Cereals';
import Hero from '../components/Hero';
import Remates from '../components/remates/Remates';
import Suscription from '../components/Suscription';

export default function Home() {
  return (
    <>
      <Hero />
      <Remates />
      <Suscription />
      <Cereals />
      <About />
    </>
  );
}
