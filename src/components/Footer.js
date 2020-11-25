import React from 'react';
import logoWip from '../assets/static/wip-white.svg';

function Footer(props) {
  return (
    <footer className='footer'>
      <a
        href='https://bit.ly/364ixVk'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={logoWip} alt='wip' className='wip' />
      </a>
    </footer>
  );
}

export default Footer;
