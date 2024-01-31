import React from 'react'

import {Route,Routes} from "react-router-dom"
import UserDetails from './components/UserDetails.jsx'
import Home from './components/Home.jsx'
import Header from './components/Header'
import Footer from "./components/Footer";
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login/Login.jsx'
import Signup from './components/signup/Signup.jsx'


function App() {
  return (

    <div>
     
     <Header />
     
     
     <Routes>

        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
         
         
       </Routes>

      <Footer />
      
      </div>

    

  )
}

export default App
