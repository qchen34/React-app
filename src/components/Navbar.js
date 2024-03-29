import React from 'react'
import styled from 'styled-components'
import "./Navbar.css"

export default function Navbar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <a class="navbar-brand" href="#">
            <img src="logo.svg" style={{ width: '35px'}}/>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a href="#">News</a>
              </li>
              <li class="nav-item">
                <a href="#">Contact</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
      </nav>
    )
}

