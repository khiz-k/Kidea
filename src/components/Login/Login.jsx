import React from 'react';
import './login.scss';

export default function Login(props) {
  return (
    <div className="login-container">
    <form>
      <button className="btn btn-ghost">
        <img src="./images/google.png" alt="" />
        Sign in with Google
      </button>
      <small>or</small>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
      </div>
      <div className="checkbox-container">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember me</label>
        <a href="#">Forgot Password</a>
      </div>
      <button className="btn">Sign In</button>
      <small>Don't have an account? <a href="#">Sign up</a></small>
    </form>
    <div className="features">
      <div className="feature">
        <i className="fas fa-code" />
        <h3><img src="./assets/film.svg"/> Movies</h3>
        <p>Movies targetted to engage your children in a stimulating and positive way.</p>
      </div>
      <div className="feature">
        <i className="fas fa-gift" />
        <h3><img src="./assets/tv.svg"/> TV Shows</h3>
        <p>TV shows catered to your children based on age group.  Educational, immersive, PG content.</p>
      </div>
      <div className="feature">
        <i className="fas fa-edit" />
        <h3><img src="./assets/news.svg"/> News</h3>
        <p>News broken down and explained to your children in a meaningful and effective manner.</p>
      </div>
    </div>
  </div>
  );
}
