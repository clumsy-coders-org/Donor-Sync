import React from 'react'
import logonb from '../assets/logo.png'
import bicon from '../assets/logo.png'
import pro from '../assets/person-square.svg'


function Header() {
  return (
    <div>
    <nav class="navbar bg-body-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src= {logonb} alt="Logo" width="35" height="60" class="d-inline-block align-text-top"/>
      DonorSync
    </a>
    <img src= {bicon} alt="Logo" width="20" height="24" class="d-inline-block align-text-top"/>
    <a class="navbar" href="#"> Home </a>
    <a href="#"> About </a>
    <a href="#"> Contact </a>
    <img src= {bicon} alt="Logo" width="20" height="24" class="d-inline-block align-text-top"/>
     
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src= {pro} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>     
        
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Login</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Sign-up</a></li>
          </ul>
    <form class="d-flex" role="search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Header