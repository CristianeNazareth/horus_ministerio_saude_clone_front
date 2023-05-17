// eslint-disable-next-line no-return-assign, no-param-reassign


import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';

/* eslint-disable no-var */
  
import  {App} from './main/app'
  
/* eslint-enable no-var */
// import { Logo } from './components/template/logo';
// import {Footer} from './components/template/footer';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <h1>Cristiane</h1>
    
  </React.StrictMode>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


