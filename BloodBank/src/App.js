

import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"


function App() {
  return (
    <div>

      <Routes>

        <Route element={<Home />} path='/' />



      </Routes>




    </div>
  )
}

export default App
