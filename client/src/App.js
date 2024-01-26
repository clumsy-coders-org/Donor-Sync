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

        <Route element={<Signup />} path='/' />

        

        


      </Routes>

      {/* <Login/>  */}


      {/* <Home/>
      <Login/> 
      <UserDetails/> */}
    </div>
  )
}

export default App
