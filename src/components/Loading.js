import React from 'react';

export default function Loading() {
  return (
    <div className='loading'>
      <h5>Cargando lista de remates</h5>
      <div class='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
