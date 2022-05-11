import './index.scss';
import './index.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
