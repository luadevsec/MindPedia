import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Home = () => {
  const navigate = useNavigate();

  const navigateToMenu = () => {
    navigate("/menu");
  };

  return (
    <div className="container">
      <img src="../assets/logo.jpeg" alt="logo do mindpedia" width="400" />
      <button className="btn" onClick={navigateToMenu}>Toque para Iniciar</button>
    </div>
  );
}

export default Home;
