import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Inicio from './pages/Inicio/Inicio.jsx';
import Memoria from './pages/Memoria/Memoria.jsx';
import Tresenraya from './pages/Tresenraya/Tresenraya.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Inicio />} />
            <Route path="/tresenraya" element={<Tresenraya />} />
            <Route path="/memoria" element={<Memoria />} />
            <Route path="*" element={<NotFound />} />
           </Route>
        </Routes>
     
    </BrowserRouter>
  </React.StrictMode>
)
