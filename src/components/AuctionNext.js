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
        {item.link_preoferta && (
          <div className='mt-2'>
            <a
              className='btn btn-dark'
              target='_blank'
              rel='noopener noreferrer'
              href={item.link_preoferta}
            >
              Acceso a Preoferta
            </a>
          </div>
        )}
      </h4>
    </div>
  );
}
