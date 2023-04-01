import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.scss';
import Router from './router';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Router />
);

