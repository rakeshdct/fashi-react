import React from 'react'
import { Link } from "react-router-dom";
import './../../styles/login.css';

const Login = () => {
  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <Link to="../"><i className="fa fa-home"></i> Home</Link>
                <span>Login</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="register-login-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="login-form">
                <h2>Login</h2>
                <form action="#">
                  <div className="group-input">
                    <label htmlFor="username">Username or email address *</label>
                    <input type="text" id="username" />
                  </div>
                  <div className="group-input">
                    <label htmlFor="pass">Password *</label>
                    <input type="text" id="pass" />
                  </div>
                  <div className="group-input gi-check">
                    <div className="gi-more">
                      <label htmlFor="save-pass">
                        Save Password
                        <input type="checkbox" id="save-pass" />
                        <span className="checkmark"></span>
                      </label>
                      <Link to="./forgot-password" className="forget-pass">Forget your Password</Link>
                    </div>
                  </div>
                  <button type="submit" className="site-btn login-btn">Sign In</button>
                </form>
                <div className="switch-login">
                  <Link to="./register" className="or-login">Or Create An Account</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login