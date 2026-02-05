import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate=useNavigate()
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            CarRent
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/Cars">
                Cars
              </NavLink>
              <NavLink className="nav-link" to="/MyBookings">
                My bookings
              </NavLink>
              <div className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="search"
                  aria-label="search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
                <button
                  className="btn btn-success ms-2"
                  onClick={() => useNavigate("/owner")}
                >
                  Dasboard
                </button>
                <button
                  className="btn btn-primary ms-2"
                  onClick={() => useNavigate("/login")}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar