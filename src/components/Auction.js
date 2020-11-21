import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import getCalendar from '../services/getCalendar';
import Form from './Form';
import AuctionItem from './AuctionItem';
import AuctionNext from './AuctionNext';

export default function Auction() {
  const [isLoading, setIsLoading] = useState(false);
  const [calendar, setCalendar] = useState([]);

  useEffect(function () {
    setIsLoading(true);
    getCalendar().then((calendar) => {
      setCalendar(calendar);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <div className='auction'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              {isLoading && <Loading />}
              {calendar.length > 0 && (
                <>
                  <div className='calendar'>
                    <h3>Próximos Remates</h3>
                    <hr />
                    <div className='row'>
                      {calendar.map((item, index) => (
                        <>
                          {index === 0 ? (
                            <div className='col-md-12'>
                              <AuctionNext item={item} />
                            </div>
                          ) : (
                            <div className='col-md-6'>
                              <AuctionItem item={item} />
                            </div>
                          )}
                        </>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className='col-md-4'>
              <div className='form'>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
