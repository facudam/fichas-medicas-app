import React from 'react';
import ReactDOM from 'react-dom/client';
import { FichasMedicasApp } from './FichasMedicasApp';
import { BrowserRouter } from 'react-router-dom'
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <FichasMedicasApp />
    </React.StrictMode>
  </BrowserRouter>
  
);


