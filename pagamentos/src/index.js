import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css'
import AppRoutes from './routes';
import { initMercadoPago } from '@mercadopago/sdk-react';

initMercadoPago('TEST-d2d6d2f9-9355-4235-9d36-f5d63d3bc776');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

