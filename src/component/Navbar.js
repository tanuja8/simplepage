import { Link } from "react-router-dom";
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Belton</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li className="nav-item">
          <Link to="home" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="about" className="nav-link active">About</Link>
        </li>
        <li className="nav-item">
        <Link to="service" className="nav-link active">Services</Link>
        </li>
        <li className="nav-item">
        <Link to="contact" className="nav-link active">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
