import React from 'react'
import { Link } from "react-router-dom";
import './../styles/login.css';

function Forgotpassword() {
    return (
        <>
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
                                <form action="#">
                                    <div className="group-input">
                                        <label htmlFor="username">Username or email address *</label>
                                        <input type="text" id="username" />
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