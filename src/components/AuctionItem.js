import React from 'react';
import moment from 'moment';

import Logotipo from '../assets/static/logo-mondino.jpg';
import logoCanalRural from '../assets/static/logo-canal-rural.png';

export default function AuctionItem(props) {
  const item = props.item;
  const imagen = item.imagen[0] && item.imagen[0].formats.small.url;
  return (
    <>
      <div className='card'>
        <img src={imagen ? imagen : Logotipo} alt='' className='card-img-top' />
        <div className='card-body'>
          <div>
            <h4 className='card-title'>{item.titulo}</h4>
            <div className='card-text'>
              {moment(item.fecha).format('dddd DD/MM')}
            </div>
            {item.televisado && (
              <>
                <div className='mb-1'>remate televisado por</div>
                <img src={logoCanalRural} alt='canal rural' height='30' />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
