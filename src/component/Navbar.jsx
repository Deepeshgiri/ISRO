import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {


  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">ISRO INFO</div>
       
        <label htmlFor="drawer-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/spacecrafts" className="nav-link">
              SpaceCrafts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/customersatellite" className="nav-link">
              Customer Satellites
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/centres" className="nav-link">
              Centers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/launchers" className="nav-link">
              Launchers
            </Link>
          </li>
        </ul>
      </nav>
      
     
    </div>
  );
}

export default Navbar;
