

import React from 'react'

import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Home from './components/home/Home.jsx'






function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Register />} />

      </Routes>

    </div>
  )
}

export default App
