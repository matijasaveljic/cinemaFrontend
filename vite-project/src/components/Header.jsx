import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <img
              src="logo-placeholder-image.png"
              alt="Logo"
              className="header-logo"
            />
          </div>
          <nav className="navigation">
            <div className="nav-buttons">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/MoviesPage">Movies</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
