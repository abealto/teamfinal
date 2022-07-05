import React from "react"
import '../stylesheets/NavBar.css'


const NavBar1 = () => {

  return (
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
        <a class="navbar-brand" href="http://localhost:3000/home">
          <img src="OverSight-Logo.png" alt="Logo" width="28px" height="28px" class="logo" /> verSight
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id='btns'>
            <li class="nav-item">
              <a class="btn btn-outline-info" href="http://localhost:3000/home" tabindex="-1" aria-disabled="true" id="cancel">Cancel</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
}

export default NavBar1

