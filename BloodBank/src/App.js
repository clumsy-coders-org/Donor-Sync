

import React from 'react'

import { Route, Routes } from "react-router-dom"
import Welcome from "./components/welcomee/welcome"
// import Login from './components/Login/Login.jsx'
// import Register from './components/Register/Register.jsx'
// import Home from './components/home/Home.jsx'
// import Welcome from './components/welcomee/welcome.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';






function App(){
  return (
    <div>

        <Routes>

        <Route path="/" element={<Welcome />} />
       
       
        </Routes>

      
      
      {/* <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/home' element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
          <Route path='/signup' element={<Register/>} />

      </Routes> */}

    </div>
  )
}

export default App
