import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="Login">
      <div className="facebook">
        <div className="facebookText">facebook</div>
        <div className="title">
          Facebook helps you connect and share<br></br>with the people in your
          life.
        </div>
      </div>
      <div className="loginContainer">
        <div className="loginDetails">
          <input type="email" placeholder="Email address or phone number" />
          <br></br>
          <input type="Password" placeholder="Password" />
          <br></br>
          <button className="btn">
            <Link className="btnLink" to="/menu">Log in</Link>
          </button>
          <div className="forgotPassword">
            <a href="forget">Forgotten password?</a>
            <br className="brCreate"></br>
          </div>
        </div>
        <div className="createAccount">
          <br className="brCreate"></br>
          <button className="btnCreateAccount"> Create New Account</button>
        </div>
        <p></p>
        <br></br>
        <div className="createPage">
          <a href="create">Create a Page</a> for a celebrity, band or business.
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
