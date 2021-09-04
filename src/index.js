import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { startRestServer } from '@studio/mocks/restServer.js';
import { startWebsocketServers } from '@studio/mocks/websocketServer.js';

import App from './App';

// define which environments the mock server is active
var mockedEnvs = ['development', 'production'];
if (mockedEnvs.includes(process.env.NODE_ENV)) {
  console.info('Initializing mock servers');
  startRestServer();
  startWebsocketServers();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
