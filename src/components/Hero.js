import React from 'react';
import Form from './Form';

import HeroHeadline from './HeroHeadline';
import Calendar from './Calendar';
// import HeroInfo from "./HeroInfo";
import calendar from '../data/calendar.json';

function Hero(props) {
  return (
    <div className='hero'>
      <div className='darken'></div>
      <div className='content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7 col-lg-7 col-xl-8'>
              <HeroHeadline />
              {/* <HeroInfo /> */}
              <Calendar calendar={calendar} />
            </div>
            <div className='col-md-5 col-lg-5 col-xl-4'>
              <Form calendar={calendar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
