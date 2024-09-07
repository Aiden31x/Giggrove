import {BrowserRouter, Route , Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { WorkExpl } from './pages/worker-expl'

import './App.css'
import { CompN } from './pages/companypage'
import { Gigdesc } from './pages/gigpage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/workexpl" element={<WorkExpl />} />
      <Route path="/company" element={<CompN />} />
      <Route path="/jobdesc" element={<Gigdesc />} />
      </Routes></BrowserRouter>
    </>
  )
}

export default App
