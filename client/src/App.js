import React from 'react'

import {Route,Routes} from "react-router-dom"
import Login from './components/Login.jsx'
import UserDetails from './components/UserDetails.jsx'
import Home from './components/Home.jsx'
import Signup from './components/signup/Signup.jsx'


function App() {
  return (
    <div>



      <Routes>

        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
         

        

        


      </Routes>

     
    </div>
  )
}

export default App
