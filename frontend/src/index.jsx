import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './pages/Menu';
import Cadastro from './pages/cadastro';
import Ficha from './pages/Ficha';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/ficha/:id" element={<Ficha />} />

    </Routes>
  </Router>
);
