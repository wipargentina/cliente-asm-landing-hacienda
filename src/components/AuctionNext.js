import React from 'react';
import moment from 'moment';

export default function AuctionNext(props) {
  const item = props.item;
  return (
    <div className='mb-5'>
      <h1>{item.titulo}</h1>
      <h4>
        {moment(item.fecha).format('dddd D')} de{' '}
        {moment(item.fecha).format('MMMM')}, {moment(item.fecha).format('LT')}hs
        {item.televisado && <span> por Canal Rural</span>}
      </h4>
      {item.link_preoferta && (
        <div className='mt-2'>
          <b>Pre oferta disponible</b>, complete el formulario para obtener el
          enlace de acceso.
        </div>
      )}
    </div>
  );
}
