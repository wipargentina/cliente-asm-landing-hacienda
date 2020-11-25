import React, { useState } from 'react';
import moment from 'moment';
import IconBell from './IconBell';
import logoCanalRural from '../assets/static/logo-canal-rural.png';

export default function AuctionNext(props) {
  const item = props.item;
  const imagen = props.item.imagen[0] && item.imagen[0].formats.small.url;
  const [message, setMessage] = useState(false);

  const handleClick = () => {
    setMessage(true);
    const timer = setTimeout(() => {
      setMessage(false);
    }, 5000);
    return () => clearTimeout(timer);
  };
  return (
    <div className='mb-5'>
      {imagen && <img src={imagen} alt='' className='img-fluid imagen' />}

      <h1>{item.titulo}</h1>
      <h4>
        {moment(item.fecha).format('dddd D')} de{' '}
        {moment(item.fecha).format('MMMM')}, {moment(item.fecha).format('LT')}hs
        {item.televisado && (
          <>
            <span className='mr-2'> por Canal Rural</span>
            <img src={logoCanalRural} alt='canal rural' height='30' />
          </>
        )}
      </h4>
      <p className='lead'>
        Registrate para participar de nuestro próximo remate
      </p>
      {item.link_preoferta && (
        <div className='pre-offer'>
          <button onClick={handleClick} className='btn btn-success mr-3 '>
            <div className='notification'>
              <IconBell />
              Pre Oferta habilitada
            </div>
          </button>
          <div className='date'>
            Del <b>{moment(item.inicio_preoferta).format('DD/MM HH:mm')}hs</b>{' '}
            al <b>{moment(item.fin_preoferta).format('DD/MM HH:mm')}hs</b>
          </div>
          {message && (
            <div className='message'>
              Completá el formulario para obtener el enlace de acceso.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
