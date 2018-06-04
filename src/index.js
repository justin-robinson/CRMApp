import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import config from 'react-global-configuration';
import configuration from './Config';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

config.set(configuration);

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
