import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <BrowserRouter>
        <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <img
              src="plogo-placeholder-image.png"
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
                  <Link to="/movies">Movies</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
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
    </BrowserRouter>
  );
}

export default Header;
