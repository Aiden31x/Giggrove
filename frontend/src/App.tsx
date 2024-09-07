import {BrowserRouter, Route , Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { WorkExpl } from './pages/worker-expl'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/workexpl" element={<WorkExpl />} />
      </Routes></BrowserRouter>
    </>
  )
}

export default App
