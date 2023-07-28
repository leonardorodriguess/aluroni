import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cardapio from './pages/Cardapio';
import Inicio from 'pages/Cardapio/Inicio';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Inicio/>
  </React.StrictMode>
);

