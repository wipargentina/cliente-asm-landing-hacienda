import React from 'react';
import { Link as Scroll } from 'react-scroll';
import moment from 'moment';
import IconBell from './IconBell';
import logoCanalRural from '../assets/static/logo-canal-rural.png';

export default function AuctionNext(props) {
  const item = props.item;
  const imagen = props.item.imagen[0] && item.imagen[0].formats.small.url;
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
            <br className='d-sm-none' />
            <img src={logoCanalRural} alt='canal rural' height='30' />
          </>
        )}
      </h4>
      <p className='lead'>
        Registrate para participar de nuestro próximo Remate{' '}
        {item.link_preoferta && <> o de la Pre Oferta</>}
      </p>
      {item.link_preoferta && (
        <div className='pre-offer'>
          <Scroll
            to='register'
            spy={false}
            smooth={true}
            offset={-100}
            duration={599}
            className='btn btn-outline-success'
          >
            <div className='notification'>
              <IconBell />
              PRE OFERTA DISPONIBLE
            </div>
          </Scroll>
          <div className='date'>
            {item.inicio_preoferta && (
              <div>
                Inicio Pre Oferta:{' '}
                <b>{moment(item.inicio_preoferta).format('DD/MM HH:mm')}hs</b>{' '}
              </div>
            )}
            {item.fin_preoferta && (
              <div>
                Cierre Pre Oferta:{' '}
                <b>{moment(item.fin_preoferta).format('DD/MM HH:mm')}hs</b>
              </div>
            )}
          </div>
        </div>
      )}
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
