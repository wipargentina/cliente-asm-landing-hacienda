import React from 'react';
import { Link as Scroll } from 'react-scroll';

export default function AuctionNext() {
  return (
    <div className='mb-5'>
      <h1 className='mb-3'>Registrate y participá</h1>
      <p className='lead'>
        Completá el formulario y un asesor de nuestra compañia te contactará
        para informate todo sobre nuestros remates.
      </p>
      <h4>
        ¡Somos el consignatario de hacienda elegido por las principales cabañas
        del país!.
      </h4>
      <p></p>
      <Scroll
        to='register'
        spy={false}
        smooth={true}
        offset={-100}
        duration={599}
        className='btn btn-lg btn-primary d-sm-none'
      >
        ¡REGISTRATE AHORA!
      </Scroll>
    </div>
  );
}
