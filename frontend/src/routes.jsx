import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import NotFound from "./pages/NotFound/NotFound"; // 404 page
import Secret from "./pages/Exemple/Secret"; // secret page easteregg
import Menu from "./pages/Menu/Menu"; // Menu page
import Cadastro from "./pages/Cadastro/Cadastro"; // Cadastro page
import Ficha from "./pages/Ficha/Ficha"; // Ficha page
import Inicio from "./pages/Inicio/inicio"; // Inicio page
import Atendimento from "./pages/Atendimento/Atendimento"; // Atendimento page

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/ficha" element={<Ficha />} />
        <Route path="/atendimento" element={<Atendimento />} />
        <Route path="/quack" element={<Secret />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
