import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/styles.css';
import LandingPage from './pages/LandingPage';
import DiscussProjectPage from './pages/DiscussProjectPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectPage from './pages/ProjectPage';
import TeamPage from './pages/Team';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/discuss-project' element={<DiscussProjectPage />} />
        <Route path='/project/:id' element={<ProjectDetailPage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
