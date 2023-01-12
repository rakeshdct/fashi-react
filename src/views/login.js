import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from "./header-dux";

import './../styles/login.css';

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();  
  const [user, setuser] = useState('');
  const [pwd, setpwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === '') return setErrMsg('Enter Username')
    else if (pwd === '') return setErrMsg('Enter Password')
    else if (pwd !== 'password') return setErrMsg('Invalid Credentails')
    else { dispatch(login());localStorage.setItem('auth',true);localStorage.setItem('user',user); navigate('../'); }
  }
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
                <form onSubmit={handleSubmit} >
                  <div className="group-input">
                    <label htmlFor="username">Username or email address *</label>
                    <input type="text" id="username" autoComplete='off' onChange={(e) => setuser(e.target.value)} value={user} />
                  </div>
                  <div className="group-input">
                    <label htmlFor="password">Password *</label>
                    <input type="password" id="password" onChange={(e) => setpwd(e.target.value)} value={pwd} />
                    {errMsg && <div className="alert alert-danger">
                      <strong>Error!</strong> {errMsg}
                    </div>
                    }
                  </div>
                  <div className="group-input gi-check">
                    <div className="gi-more">
                      <label htmlFor="save-pass">
                        Save Password
                        <input type="checkbox" id="save-pass" />
                        <span className="checkmark"></span>
                      </label>
                      <Link to="../login/forgot-password" className="forget-pass">Forget your Password</Link>
                    </div>
                  </div>
                  <button type="submit" className="site-btn login-btn">Sign In</button>
                </form>
                <div className="switch-login">
                  <Link to="../login/register" className="or-login">Or Create An Account</Link>
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