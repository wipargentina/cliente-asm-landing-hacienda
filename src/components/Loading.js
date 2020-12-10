import React from 'react';

export default function Loading() {
  return (
    <div className='loading'>
      <h5>Cargando lista de remates</h5>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
