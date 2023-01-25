import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import PreLoader from '../components/pagePreLoader';
import './../styles/login.css';
import { RegisterApi, SendVerificationMail } from '../services/Api'

const Register = () => {
  const initial = {
    "displayname": "",
    "email": "",
    "password": "",
    "retypepassword": "",
  }

  const [formData, setFormData] = useState(initial);
  const [loader, setLoader] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [idToken, setIdToken] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  useEffect(() => {
    if (idToken !== '') {
      setLoader(true);
      SendVerificationMail(idToken).then((response) => {
        setSuccessMsg(response.data.email)
      }).catch((err) => {
        setSuccessMsg('')
        if (err.response.data.error.message === "INVALID_ID_TOKEN") {
          setErrMsg("INVALID ID TOKEN!")
        } else if (err.response.data.error.message === "USER_NOT_FOUND") {
          setErrMsg("USER NOT FOUND!")
        } else if (err.response.data.error.message === "TOO_MANY_ATTEMPTS_TRY_LATER") {
          setErrMsg("TOO MANY ATTEMPTS TRY LATER")
        }
      }).finally(() => {
        setLoader(false)
      })
    }
  }, [idToken])
  const onChangeField = (e) => {
    setErrMsg('')
    setSuccessMsg('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg('')
    if (formData.displayname === '') return setErrMsg('Enter Name')
    else if (formData.email === '') return setErrMsg('Enter email')
    else if (emailRegex.test(formData.email) === false) return setErrMsg('Enter valid Email address')
    else if (formData.password === '') return setErrMsg('Enter Password')
    else if (formData.retypepassword === '') return setErrMsg('Enter Confirm  Password')
    else if (formData.password !== formData.retypepassword) return setErrMsg('Password and confirm Password not matched')
    else {
      setLoader(true);
      setErrMsg('')
      RegisterApi(formData).then((response) => {
        setIdToken(response.data.idToken)
        setFormData(initial)
      }).catch((err) => {
        setSuccessMsg('')
        setIdToken('')
        if (err.response.data.error.message === "EMAIL_EXISTS") {
          setErrMsg("Already this email has been registered!")
        } else if (String(err.response.data.error.message).includes('WEAK_PASSWORD')) {
          setErrMsg("Password should be at least 6 characters!")
        }
      }).finally(() => {
        setLoader(false)
      })
    }
  }
  //console.log(isAuthenticated())
  // if (isAuthenticated()) {
  //   navigate('../');
  // }
  return (
    <>
      {loader && <PreLoader />}
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
                <form onSubmit={handleSubmit} >
                  <div className="group-input">
                    <label htmlFor="displayname">Name *</label>
                    <input name='displayname' value={formData.displayname} onChange={onChangeField} type="text" id="displayname" />
                  </div>
                  <div className="group-input">
                    <label htmlFor="username">Email address *</label>
                    <input name='email' value={formData.email} type="text" onChange={onChangeField} id="username" />
                  </div>
                  <div className="group-input">
                    <label htmlFor="pass">Password *</label>
                    <input name='password' value={formData.password} onChange={onChangeField} type="password" id="pass" />
                  </div>
                  <div className="group-input">
                    <label htmlFor="con-pass">Confirm Password *</label>
                    <input name='retypepassword' value={formData.retypepassword} onChange={onChangeField} type="password" id="con-pass" />
                    {errMsg && <div className="alert alert-danger">
                      <strong>Error!</strong> {errMsg}
                    </div>
                    }
                    {successMsg && <div className="alert alert-success">
                      <strong>Success!</strong><br />Verification mail has been sent to <strong>{successMsg}</strong>
                    </div>
                    }
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