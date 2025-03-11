import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importe os componentes necessários
import AppRoutes from './routes/AppRoutes'; // Importando as rotas

import { GlobalStyles } from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles /> {/* Adicionando o CSS global */}
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
