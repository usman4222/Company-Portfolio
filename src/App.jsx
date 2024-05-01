import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DiscussProjectPage from './pages/DiscussProjectPage'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/discuss-project' element={<DiscussProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
