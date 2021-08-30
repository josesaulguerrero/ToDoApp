import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/index';

// context
import InitialDataProvider from './context/AppContext';

// assets
import './assets/styles/Global.css';

ReactDOM.render(
  <React.StrictMode>
    <InitialDataProvider>
      <App />
    </InitialDataProvider>
  </React.StrictMode>,
  document.querySelector('#root')
);
