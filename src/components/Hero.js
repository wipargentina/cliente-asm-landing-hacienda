import React from 'react';
import { Link as Scroll } from 'react-scroll';
import image from '../assets/static/bg-hero.jpg';

export default function Hero() {
  return (
    <div className='hero'>
      <img src={image} alt='' className='hero-bg' />
      <div className='hero-content'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h1>Remate de Hacienda y Cereales</h1>
            <h4>Más de 30 años acompañando al productor agropecuario.</h4>
            <Scroll
              to='auction'
              spy={true}
              smooth={true}
              offset={-98}
              duration={599}
              className='btn btn-lg px-5 mt-5 btn-primary text-white'
            >
              PRÓXIMO REMATE
            </Scroll>
          </div>
        </div>
      </div>
    </div>
  );
}
