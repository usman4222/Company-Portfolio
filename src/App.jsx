import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/styles.css';
import LandingPage from './Pages/LandingPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
