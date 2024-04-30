import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPge from './Pages/LandingPge';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
