import React from "react";




function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="http://localhost:3000/home">
      <img src="OverSight-Logo.png" alt="Logo" width="24px" height="24px"   /> verSight
    </a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="btn btn-outline-primary" aria-current="page" href="http://localhost:3000/about">About</a>
        </li>
        <li class="nav-item">
          <a class="btn btn-outline-secondary" href="http://localhost:3000/reviewBoard">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="btn btn-outline-info" href="http://localhost:3000/home" tabindex="-1" aria-disabled="true">Cancel</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    );
}

export default Navbar;