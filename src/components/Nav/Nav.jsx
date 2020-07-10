import React from 'react';
import './nav.scss';
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <header>
      <section className="nav-bar">
        <div className="nav-bar__logo">
          <Link to="/" className="nav-bar__anchor">
            <h1 className="nav-bar__logo-text">KIDEA</h1>
          </Link>
        </div>
        <nav className="nav-bar__main">
        <ul className="nav-bar__list">
          <li className="nav-bar__list-item">
            <Link to="/movies" className="nav-bar__anchor">Movies</Link>
          </li>
          <li className="nav-bar__list-item">
            <Link to="/shows" className="nav-bar__anchor">TV Shows</Link>
          </li>
          <li className="nav-bar__list-item">
            <Link to="/news" className="nav-bar__anchor">News</Link>
          </li>
          <li className="nav-bar__list-item">
            <Link to="/about" className="nav-bar__anchor">About</Link>
          </li>
          <li className="nav-bar__list-item user-login">
            <Link to="/login" className="login-button__link"><button name="loginVideo" className="login-button" id="login-button" value="login">Sign In</button></Link>
          </li>
        </ul>
        </nav>
      </section>
    </header>
  );
}
