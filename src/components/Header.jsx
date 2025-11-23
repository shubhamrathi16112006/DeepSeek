import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "./../styles/Header.css";

export default function Header() {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const logo = "https://via.placeholder.com/170x40/2563eb/ffffff?text=MilkRide+Logo";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  return (
    <header className="site-header">
      <div className="logo">
        <img src={logo} alt="MilkRide Logo" />
      </div>

      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          {user && <li><Link to="/Shop">Shop</Link></li>}
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>

      {user ? (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      )}
    </header>
  );
}