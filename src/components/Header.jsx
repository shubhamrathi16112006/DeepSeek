import React from "react";
import "./../styles/Header.css";
import { Link } from "react-router-dom";
import logo from "./../assets/asset 0.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <img src={logo} alt="MilkRide Logo" />
      </div>

      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Shop">Shop</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>

      <button className="request-demo">Request Demo</button>
    </header>
  );
}