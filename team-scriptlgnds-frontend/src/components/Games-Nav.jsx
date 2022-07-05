import React from "react";
import "../stylesheets/NavBar.css";
import Search from "./search";

const NavBar2 = () => {
  return (
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="http://localhost:3000/home">

          <img
            src="OverSight-Logo.png"
            alt="Logo"
            width="28px"
            height="28px"
            class="logo"
          /> verSight
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            </li>
            <li class="nav-item">
              <a
                class="btn btn-outline-info btn"
                href="http://localhost:3000/home"
                tabindex="-1"
                aria-disabled="true"
              >
                Logout
              </a>
            </li>
            <li class="nav-item">
              <a
                class="btn btn-outline-light btn"
                href="http://localhost:3000/profile"
                tabindex="-1"
                aria-disabled="true"
              >
                Profile
              </a>
            </li>
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default NavBar2;
