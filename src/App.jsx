import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './assets/css/styles.css';
import LandingPage from './pages/LandingPage';
import DiscussProjectPage from './pages/DiscussProjectPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectPage from './pages/ProjectPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/discuss-project' element={<DiscussProjectPage />} />
        <Route path='/project/:id' element={<ProjectDetailPage />} />
        <Route path='/project' element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
