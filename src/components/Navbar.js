import React, { useState } from 'react'
import logo from "../assets/images/logo.svg"
import h1 from "../assets/images/h1.png"
import { FaPlus, FaMicrophone, FaSearch } from "react-icons/fa";


export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container-fluid d-flex justify-content-between align-items-center">

          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Logo" />
            </a>

            <div className="healthyme-title d-flex align-items-center">
              <a href="#"><h1>HealthyMe</h1></a>
              <img src={h1} alt="plus" className="plus-icon" />
            </div>
          </div>

          <div className="d-flex align-items-center gap-3 d-md-none">
            <i
              className="bi bi-search"
              style={{ fontSize: "20px", cursor: "pointer" }}
              onClick={() => setShowSearch(!showSearch)}
            ></i>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse gap-3" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">How To Use</a></li>
            </ul>
            <button className="btn btn-primary" to="login.html">Login</button>
          </div>
        </div>

        {showSearch && (
          <div className="d-flex  d-md-none align-items-center bg-white shadow-sm rounded-pill p-2 mt-2" style={{ maxWidth: "500px" }}>
                <input
                  type="text"
                  placeholder="Search your product"
                  className="form-control border-0 me-2"
                  style={{ flex: 1 }}
                />
          
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                       style={{ width: "40px", height: "40px", cursor: "pointer" }}>
                    <FaPlus />
                  </div>
          
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                       style={{ width: "40px", height: "40px", cursor: "pointer" }}>
                    <FaMicrophone />
                  </div>
          
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                       style={{ width: "40px", height: "40px", cursor: "pointer" }}>
                    <FaSearch />
                  </div>
                </div>
              </div>
        )}
      </nav>
    </div>
  )
}