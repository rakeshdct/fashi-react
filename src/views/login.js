import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from "./header-dux";
import { LoginApi } from '../services/Api'
import { storeUserData } from '../services/Storage'
// import { isAuthenticated } from '../services/Auth';

import './../styles/login.css';
import PreLoader from '../components/pagePreLoader';

const Login = () => {
  const initial = {
    "email": "",
    "password": ""
  }

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initial);
  const [loader, setLoader] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const onChangeField = (e) => {
    setErrMsg('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === '') return setErrMsg('Enter Email')
    else if (emailRegex.test(formData.email) === false) return setErrMsg('Enter valid Email address')
    else if (formData.password === '') return setErrMsg('Enter Password')
    else {
      setLoader(true);
      LoginApi(formData).then((response) => {
        storeUserData(response.data.idToken, response.data.displayName);
        dispatch(login());
        navigate('../');
      }).catch((err) => {
        if (err.code === "ERR_BAD_REQUEST") {
          setErrMsg("Invalid Credentials.")
        }
      }).finally(() => {
        setLoader(false)
      })
    }
  }

  return (
    <>
      {loader && <PreLoader />}
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
                    <label htmlFor="username">Email address *</label>
                    <input type="text" id="username" autoComplete='off' name='email' value={formData.email} onChange={onChangeField} />
                  </div>
                  <div className="group-input">
                    <label htmlFor="password">Password *</label>
                    <input type="password" id="password" name='password' value={formData.password} onChange={onChangeField} />
                    {errMsg && <div className="alert alert-danger">
                      <strong>Error!</strong> {errMsg}
                    </div>
                    }
                  </div>
                  <div className="group-input gi-check">
                    <div className="gi-more">
                      {/* <label htmlFor="save-pass">
                        Save Password
                        <input type="checkbox" id="save-pass" />
                        <span className="checkmark"></span>
                      </label> */}
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