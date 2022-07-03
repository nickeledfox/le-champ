import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './config/i18n'

import { GlobalStyles } from './styles/GlobalStyles';

import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
