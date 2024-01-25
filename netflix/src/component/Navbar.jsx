

import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <nav
        class="navbar navbar-expand-lg bg-dark"
        data-bs-theme="dark"
        style="background-color: #221f1f !important"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#"
            ><img src="assets/logo.png" style="width: 100px; height: 55px"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active fw-bold" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#">TV Shows</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#">Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#">Recently Added</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#">My List</a>
              </li>
            </ul>
            <div class="d-flex align-items-center">
              <i class="bi bi-search icons"></i>
              <div id="kids" class="fw-bold">KIDS</div>
              <i class="bi bi-bell icons"></i>
              <i class="bi bi-person-circle icons"></i>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar