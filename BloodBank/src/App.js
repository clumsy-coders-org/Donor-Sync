

import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'



function App() {
  return (
    <div>
       <Routes>

          <Route path="/login" element={<Login/>}/>
          <Route path='/signup' element={<Register/>} />
      
      </Routes>

    </div>
  )
}

export default App
