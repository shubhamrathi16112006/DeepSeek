import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "./../styles/Header.css";

export default function Header() {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const logo = "https://app.milkride.com/storage/ImageGallery/Config/17563903022vpGI.png";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  // Function to handle protected route clicks
  const handleProtectedClick = (path, e) => {
    if (!user) {
      e.preventDefault(); // Prevent navigation
      navigate("/Login", { state: { from: path } }); // Redirect to login
    }
    // If user is logged in, the normal Link navigation will work
  };

  // Check if current path is active
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="site-header">
      <div className="logo">
        <img src={logo} alt="MilkRide Logo" />
      </div>

      <nav>
        <ul className="nav-list">
          <li>
            <Link 
              to="/" 
              className={isActive("/") ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/About" 
              className={isActive("/About") ? "active" : ""}
              onClick={(e) => handleProtectedClick("/About", e)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/Shop" 
              className={isActive("/Shop") ? "active" : ""}
              onClick={(e) => handleProtectedClick("/Shop", e)}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link 
              to="/Contact" 
              className={isActive("/Contact") ? "active" : ""}
              onClick={(e) => handleProtectedClick("/Contact", e)}
            >
              Contact
            </Link>
          </li>
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