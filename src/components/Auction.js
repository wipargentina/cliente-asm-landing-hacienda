import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { getCalendar, getEvent } from '../services/getCalendar';
import Form from './Form';
import AuctionItem from './AuctionItem';
import AuctionNext from './AuctionNext';
import AuctionEmpty from './AuctionEmpty';

export default function Auction() {
  const [isLoading, setIsLoading] = useState(false);
  const [calendar, setCalendar] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(function () {
    setIsLoading(true);
    getCalendar().then((calendar) => {
      setCalendar(calendar);
      setIsLoading(false);
    });
    getEvent().then((event) => {
      setEvent(event);
    });
  }, []);
  return (
    <>
      <div className='auction'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <h3 className='text-primary'>Remate de Hacienda</h3>
              {isLoading && <Loading />}
              {calendar.length > 0 ? (
                <>
                  <h2>Especiales de Fin de Año!</h2>
                  <div className='calendar'>
                    <div className='row'>
                      {calendar.map((item, index) => (
                        <React.Fragment key={item.id}>
                          {index === 0 ? (
                            <div className='col-md-12'>
                              <AuctionNext item={item} />
                              <hr />
                              <h3 className='mt-5 mb-4'>
                                Calendario de Remates
                              </h3>
                            </div>
                          ) : (
                            <div className='col-md-6'>
                              <AuctionItem item={item} />
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {!isLoading && (
                    <>
                      <AuctionEmpty />
                    </>
                  )}
                </>
              )}
            </div>
            <div className='col-md-4'>
              <div className='form'>
                <Form event={event} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
