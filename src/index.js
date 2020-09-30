import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/js/bootstrap';
import moment from 'moment';
import locale from 'moment/locale/es';
import TagManager from 'react-gtm-module';

moment.updateLocale('es', locale);

const tagManagerArgs = {
  gtmId: 'GTM-T97MQN7'
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
