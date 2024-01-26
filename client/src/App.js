import React from 'react'

import {Route,Routes} from "react-router-dom"
import Login from './components/Login.jsx'
import UserDetails from './components/UserDetails.jsx'
import Home from './components/Home.jsx'
import Header from './components/Header'
import Footer from "./components/Footer";
import About from './components/About'
import Contact from './components/Contact'


function App() {
  return (

    <div>


         <Header />
       <Routes>
        
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        
         </Routes>

      <Footer />

  

    
    </div>

    

  )
}

export default App
