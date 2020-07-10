import React from 'react';
import './login.scss';

export default function Login(props) {
  return (
      <section className="login">
        <h1 className="login__title">Sign in Below</h1>
        <form name="authenticateUser" className="authenticate-user" id="authenticate-user" >
          <div className="inputs-container">
            <div className="info-container">
              <label htmlFor="userName" className="label-text">Username</label>
              <input type="text" name="userName" className="user-name" id="user-name" placeholder="Enter Your Username" required={true} />
              <label htmlFor="userPassword" className="label-text">Password</label>
              <textarea name="userPassword" className="password-container" id="password-container" placeholder="Enter Your Password" required={true} /> 
            </div>    
          </div>
          <div className="button-container">
            <input type="submit" name="userAuthentication" className="login-button" id="login-button" value="submit" />
          </div>
        </form>
      </section>
  );
}