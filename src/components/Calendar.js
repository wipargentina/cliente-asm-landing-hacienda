import React from 'react';
import moment from 'moment';
import logoCanalRural from '../assets/static/logo-canal-rural.png';

export default function Calendar(props) {
  const calendar = props.calendar;
  const today = moment().format('YYYY-MM-DD');
  return (
    <div className='calendar'>
      <h4>{moment(calendar.month).format('MMMM YYYY')}</h4>
      <ul>
        <li className='list-head'>
          <span className='list-title'>remate</span>
          <span className='list-date'>fecha</span>
        </li>
        {calendar.events.map((item) => (
          <li
            className={item.date >= today ? 'list-body' : 'list-body expired'}
            key={item.id}
          >
            <span className='list-title'>{item.title}</span>
            <span className='list-date'>
              {moment(item.date).format('dddd DD')}{' '}
              {item.tv && <img src={logoCanalRural} alt='canal rural' />}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
