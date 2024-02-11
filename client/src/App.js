import React from 'react'

import {Route,Routes} from "react-router-dom"
import UserDetails from './components/UserDetails/UserDetails.jsx'
import Home from './components/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Footer from "./components/Footer/Footer.jsx";
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
        <Route path='/userdetails' element={<UserDetails/>} />
         
         
       </Routes>
       
      <Footer />
      
      </div>

    

  )
}

export default App
