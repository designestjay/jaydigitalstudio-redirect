import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/reset.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/responsive.css';

document.documentElement.classList.add('js');
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
