import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
    return(
        <BrowserRouter>
        <header className="header">
          <div className="container">
            <nav className="navigation">
              <div className="nav-buttons">
                {" "}
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
        </header>
        <div>
          <Routes>
            <Route exact path="/"  /> {/* ovdje kad se doda element={<HomePage/ >} app ne radi pise error HomePage is not defined */}
          </Routes>
        </div>
      </BrowserRouter>
    )
}

export default Footer