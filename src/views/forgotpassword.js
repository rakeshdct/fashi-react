import React, { useState } from 'react'
import { Link } from "react-router-dom";
import PreLoader from '../components/pagePreLoader';
import './../styles/login.css';
import { ForgotApi } from '../services/Api'

function Forgotpassword() {
    const [formData, setFormData] = useState('');
    const [loader, setLoader] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const onChange = (e) => {
        setErrMsg('')
        setFormData(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMsg('')
        if (formData === '') return setErrMsg('Enter Email')
        else if (emailRegex.test(formData) === false) return setErrMsg('Enter valid Email address')
        else {
            setErrMsg('')
            setLoader(true);
            ForgotApi(formData).then((response) => {
                setSuccessMsg(response.data.email)
                setFormData('')
            }).catch((err) => {
                if (err.response.data.error.message === "EMAIL_NOT_FOUND") {
                    setErrMsg("EMAIL NOT FOUND")
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
                                <Link to="../login">Login</Link>
                                <span>Fogot Password</span>
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
                                <h2>Fogot Password</h2>
                                <form onSubmit={handleSubmit} >
                                    <div className="group-input">
                                        <label htmlFor="username">Email address *</label>
                                        <input value={formData} onChange={onChange} type="text" id="username" />
                                        {errMsg && <div className="alert alert-danger">
                                            <strong>Error!</strong> {errMsg}
                                        </div>
                                        }
                                        {successMsg && <div className="alert alert-success">
                                            <strong>Success!</strong><br />Password reset email sent to <strong>{successMsg}</strong>
                                        </div>
                                        }
                                    </div>
                                    <button type="submit" className="site-btn login-btn">Reset Password</button>
                                </form>
                                <div className="switch-login">
                                    <Link to="../login" className="or-login">OR Login&nbsp;</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgotpassword