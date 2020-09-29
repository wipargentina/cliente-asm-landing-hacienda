import React from 'react';
import logoCanalRural from '../assets/static/logo-canal-rural.png';
import logoDonBenjamin from '../assets/static/logo-don-benjamin.png';

function HeroInfo(props) {
  return (
    <div className='info'>
      <div className='row mb-3'>
        <div className='col'>
          <div className='card'>
            <div className='card-body'>
              <div className='card-title'>Inicio del Remate</div>
              <div className='card-date'>
                Viernes 25 de Septiembre <br /> 13.30 horas
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <div className='card-title'>Estancias y Cabaña</div>
              <div className='card-logo'>
                <img
                  src={logoDonBenjamin}
                  alt='canal rural'
                  className='logo-don-benjamin'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <div className='card-title'>En Vivo por</div>
              <div className='card-logo'>
                <img
                  src={logoCanalRural}
                  alt='canal rural'
                  className='logo-canal-rural'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroInfo;
