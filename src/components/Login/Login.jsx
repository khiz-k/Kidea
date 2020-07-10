import React from 'react';
import './login.scss';

export default function Login(props) {
  return (
    <div className="login-container">
    <form>
      <button className="btn btn-ghost">
        <img src="./images/google.png" alt="" />
        Log in with Google
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
      <button className="btn">Log In</button>
      <small>Don't have an account? <a href="#">Sign up</a></small>
    </form>
    <div className="features">
      <div className="feature">
        <i className="fas fa-code" />
        <h3>Development</h3>
        <p>A modern and clean design system for developing fast and powerful
          web interfaces.</p>
      </div>
      <div className="feature">
        <i className="fas fa-gift" />
        <h3>Features</h3>
        <p>A modern and clean design system for developing fast and powerful
          web interfaces.</p>
      </div>
      <div className="feature">
        <i className="fas fa-edit" />
        <h3>Updates</h3>
        <p>A modern and clean design system for developing fast and powerful
          web interfaces.</p>
      </div>
    </div>
  </div>
  );
}