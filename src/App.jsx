import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './componentss/Header';
import './assets/css/styles.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={LandingPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
