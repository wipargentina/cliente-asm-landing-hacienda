import React from 'react';
import moment from 'moment';

export default function AuctionItem(props) {
  const item = props.item;
  return (
    <>
      <div className='card mb-3'>
        <div className='card-body py-5'>
          <h4 className='card-title'>{item.titulo}</h4>
          <div className='card-text'>
            {moment(item.fecha).format('dddd DD/MM')}
          </div>
        </div>
      </div>
    </>
  );
}
