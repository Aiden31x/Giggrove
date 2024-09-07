import {BrowserRouter, Route , Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { WorkExpl } from './pages/worker-expl'

import './App.css'
import { CompN } from './pages/companypage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/workexpl" element={<WorkExpl />} />
      <Route path="/company" element={<CompN />} />
      </Routes></BrowserRouter>
    </>
  )
}

export default App
