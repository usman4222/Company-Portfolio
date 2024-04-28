import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './assets/css/styles.css';
import LandingPage from './pages/LandingPage';
import DiscussProjectPage from './pages/DiscussProjectPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/discuss-project' element={<DiscussProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
