import React, { useEffect, useState } from 'react';
import { getRemates } from '../../services/getRemates';
import Loading from '../Loading';
import AuctionEmpty from '../AuctionEmpty';
import RematesItem from './RematesItem';
import Form from '../Form';
const moment = require('moment');

export default function Remates() {
  const [isLoading, setIsLoading] = useState(false);
  const [remates, setRemates] = useState([]);
  const today = moment().format('YYYY-MM-DD');

  useEffect(function () {
    setIsLoading(true);
    getRemates().then((calendar) => {
      setRemates(calendar);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <div className='auction'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <h3 className='text-primary mb-4'>Remate de Hacienda</h3>
              <AuctionEmpty />
              <h4 className='text-primary text-uppercase font-weight-light mb-4'>
                Calendario de Remates
              </h4>
              {isLoading && <Loading />}
              <div className='calendar'>
                <div className='row'>
                  {remates.map((item) => (
                    <React.Fragment key={item.id}>
                      {item.date >= today && (
                        <div className='col-md-6'>
                          <RematesItem item={item} />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
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
