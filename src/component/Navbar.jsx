import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()


  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo"style={{cursor:"pointer"}} onClick={()=>navigate('/ISRO')}>ISRO INFO</div>
       
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
            <Link to="/ISRO" className="nav-link">
              Launchers
            </Link>
          </li>
        </ul>
      </nav>
      
     
    </div>
  );
}

export default Navbar;
