import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DiscussProjectPage from './pages/DiscussProjectPage'
import ProjectDetailPage from './pages/ProjectDetailPage'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/discuss-project' element={<DiscussProjectPage />} />
        <Route path='/project/:id' element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
