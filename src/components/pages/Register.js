import React from 'react'
import { Link } from "react-router-dom";
import './../../styles/login.css';

const Register = () => {
  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <Link to="../"><i className="fa fa-home"></i> Home</Link>
                <Link to="../login">Login</Link>
                <span>Register</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="register-login-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="register-form">
                <h2>Register</h2>
                <form action="#">
                  <div className="group-input">
                    <label htmlFor="username">Username or email address *</label>
                    <input type="text" id="username" />
                  </div>
                  <div className="group-input">
                    <label htmlFor="pass">Password *</label>
                    <input type="text" id="pass" />
                  </div>
                  <div className="group-input">
                    <label htmlFor="con-pass">Confirm Password *</label>
                    <input type="text" id="con-pass" />
                  </div>
                  <button type="submit" className="site-btn register-btn">REGISTER</button>
                </form>
                <div className="switch-login">
                  <Link to="../login" className="or-login">Or Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register