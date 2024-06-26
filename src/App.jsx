import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DiscussProjectPage from './pages/DiscussProjectPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ProjectPage from './pages/ProjectPage'
import Team from './pages/Team'
import NotFoundPage from './pages/NotFoundPage'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/discuss-project' element={<DiscussProjectPage />} />
        <Route path='/project/:id' element={<ProjectDetailPage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/team' element={<Team />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
