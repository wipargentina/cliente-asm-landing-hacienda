import React, { useEffect, useState } from 'react';
import getNextAuction from '../services/getNextAuction';
import moment from 'moment';
import faFacebook from '../assets/static/facebook-f-brands.svg';
import faInstagram from '../assets/static/instagram-brands.svg';
import faTwitter from '../assets/static/twitter-brands.svg';
import faWhatsapp from '../assets/static/whatsapp-brands.svg';
import IconBell from '../components/IconBell';

function Tanks(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [auction, setAuction] = useState([]);

  useEffect(function () {
    setIsLoading(true);
    getNextAuction().then((calendar) => {
      setAuction(calendar);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className='tanks'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <h3>Gracias por registrarte</h3>
            <p className='lead mb-4'>
              Uno de nuestros comerciales se pondrán en contacto contigo
            </p>
            {isLoading && 'cargando enlace a preoferta'}
            {auction.map((item) => (
              <>
                {item.link_preoferta && (
                  <div className='row justify-content-center'>
                    <div className='col-md-5'>
                      <div className='pre-offer mb-5'>
                        <div className='card'>
                          <div className='card-body py-4'>
                            <h4>Pre Oferta habilitada</h4>
                            <h6 className='mb-3'>
                              Del{' '}
                              {moment(item.inicio_preoferta).format(
                                'DD/MM HH:mm'
                              )}
                              hs al{' '}
                              {moment(item.fin_preoferta).format('DD/MM HH:mm')}
                              hs
                            </h6>
                            <a
                              id='btn-pre-offer'
                              className='btn btn-success btn-lg'
                              target='_blank'
                              rel='noopener noreferrer'
                              href={item.link_preoferta}
                            >
                              <div className='notification'>
                                <IconBell />
                                Acceda a la Pre Oferta
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
            <h4 className='mt-3 mb-3'>Escribinos por Whatsapp</h4>
            <div className='whatsapp'>
              <div className='row justify-content-center'>
                <div className='col-md-3'>
                  <h5>Hacienda Gorda</h5>
                  <h6>Francisco Garin</h6>
                  <a
                    id='btn-hacienda'
                    href='https://wa.me/543516509975'
                    className='btn btn-outline-success mb-4'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <img src={faWhatsapp} alt='' /> +54 351 650 9975
                  </a>
                </div>
                <div className='col-md-3'>
                  <h5>Invernada y Cría</h5>
                  <h6>Mario Masanti</h6>
                  <a
                    id='btn-invernada'
                    href='https://wa.me/3583647964'
                    className='btn btn-outline-success mb-4'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <img src={faWhatsapp} alt='' /> +54 358 3647 964
                  </a>
                </div>
                <div className='col-md-3'>
                  <h5>Reproductores</h5>
                  <h6>Leonardo Pérez</h6>
                  <a
                    id='btn-reproductores'
                    href='https://wa.me/543583640202'
                    className='btn btn-outline-success mb-4'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <img src={faWhatsapp} alt='' /> +54 358 3640 202
                  </a>
                </div>
              </div>
            </div>
            <h4 className='mb-2'>Te invitamos a que visites nuestra web</h4>
            <a
              id='link-web'
              href='https://alfredosmondino.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              https://alfredosmondino.com/
            </a>
            <h4 className='mt-3'>o que nos sigas en nuestras redes</h4>
            <div className='social'>
              <a
                id='btn-facebook'
                href='https://es-la.facebook.com/alfredosmondino/'
                rel='noopener noreferrer'
                target='_blank'
                className='btn btn-link'
              >
                <img src={faFacebook} alt='facebook' />
              </a>
              <a
                id='btn-instagram'
                href='https://twitter.com/alfredosmondino'
                rel='noopener noreferrer'
                target='_blank'
                className='btn btn-link'
              >
                <img src={faInstagram} alt='instagram' />
              </a>
              <a
                id='btn-twitter'
                href='https://twitter.com/alfredosmondino'
                rel='noopener noreferrer'
                target='_blank'
                className='btn btn-link'
              >
                <img src={faTwitter} alt='twitter' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tanks;
