import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import NotFound from './pages/NotFound';
import Menu from './pages/Menu'




const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<NotFound />} />
          <Route path="/menu" element={<Menu/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  };

export default AppRoutes;