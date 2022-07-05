import React from "react"
import '../stylesheets/NavBar.css'
import Search from "./search";


const NavBar2 = () => {

  return (
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="http://localhost:3000/home">
          <img src="../OverSight-Logo.png" alt="Logo" width="28px" height="28px" class="logo" /> verSight
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="btn btn-outline-info btn" href="http://localhost:3000/home" tabindex="-1" aria-disabled="true">Logout</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-light btn" href="http://localhost:3000/profile" tabindex="-1" aria-disabled="true">Profile</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-secondary" href="http://localhost:3000/games" tabindex="-1" aria-disabled="true" id="profile">Games</a>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>


  );
}

export default NavBar2