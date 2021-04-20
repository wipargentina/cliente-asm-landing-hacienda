import React from 'react';
import moment from 'moment';

import Logotipo from '../../assets/static/logo-mondino-negative.jpg';
import logoCanalRural from '../../assets/static/logo-canal-rural.png';
import faCalendar from '../../assets/static/calendar-alt-regular.svg';

export default function AuctionItem(props) {
  const item = props.item;
  const imagen = item.image_url;
  return (
    <>
      <div className='card'>
        <img src={imagen ? imagen : Logotipo} alt='' className='card-img-top' />
        <div className='card-header'>
          <div className='month'>
            {' '}
            <img src={faCalendar} alt='icon calnedar' /> {item.month}
          </div>
          <div className='text'>
            {item.text ? <span>{item.text}</span> : ''}
          </div>
        </div>
        <div className='card-body'>
          <div>
            <h4 className='card-title'>{item.title}</h4>
            <div className='card-text'>
              {moment(item.date).format('dddd DD/MM')}
            </div>
            {item.tv === 'si' && (
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
