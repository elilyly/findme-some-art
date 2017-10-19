import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Map from './Map'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root'));
registerServiceWorker();
