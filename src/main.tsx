<<<<<<< HEAD
import React, { StrictMode } from 'react';
=======
import { StrictMode } from 'react';
>>>>>>> 75579860cae2b79f281be2a1a57947e28603925c
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
