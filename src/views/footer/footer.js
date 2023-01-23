import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchfooterData, footerSelector } from "./footer-dux";
import Partnerlogo from './partnerLogo'
import ComponentPreLoader from './../../components/componentPreLoader';
import PreLoader from '../../components/pagePreLoader';
import { headerSelector } from "./../header-dux";
import './../../styles/footer.css';


const Footer = () => {
    const dispatch = useDispatch();
    const { footerData, loading } = useSelector(footerSelector);
    const [state, setState] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setsuccessMsg] = useState('')
    const [loader, setloader] = useState(false);
    useEffect(() => {
        dispatch(fetchfooterData());
    }, [dispatch]);
    const { isLoggin } = useSelector(headerSelector);
    const onChange = e => {
        setState(e.target.value)
        setErrorMsg('')
        setsuccessMsg('')
    }
    var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const submitForm = e => {
        e.preventDefault();
        if (state === "") return setErrorMsg("Enter email")
        else if (emailRegex.test(state) === false) return setErrorMsg('Enter valid Email address')
        else { setloader(true); setTimeout(function () { setsuccessMsg('Email subscribed for mailers'); setloader(false); }, 1000) }
    }
    return (
        <>
            <div className="partner-logo">
                <div className="container">
                    {loader && <PreLoader />}
                    {
                        loading ? <ComponentPreLoader /> : <Partnerlogo partnerLogosOwlConfig={footerData.partnerLogosOwlConfig} partnerLogos={footerData.partnerLogos} />
                    }
                </div>
            </div>
            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer-left">
                                <div className="footer-logo">
                                    <Link to="../"><img src="img/footer-logo.png" alt="" /></Link>
                                </div>
                                <ul>
                                    <li>Address: 60-49 Road 11378 New York</li>
                                    <li>Phone: +12 34.567.890</li>
                                    <li>Email: <a href="mailto:reactjs.poc@mailinator.com">reactjs.poc@mailinator.com</a></li>
                                </ul>
                                <div className="footer-social">
                                    <a href="https://www.facebook.com/" target='blank'><i className="fa fa-facebook"></i></a>
                                    <a href="https://www.instagram.com/" target='blank'><i className="fa fa-instagram"></i></a>
                                    <a href="https://twitter.com/" target='blank'><i className="fa fa-twitter"></i></a>
                                    <a href="https://www.pinterest.com/" target='blank'><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1">
                            <div className="footer-widget">
                                <h5>Information</h5>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="shop">Shop</Link></li>
                                    <li><Link to="blog">Blog</Link></li>
                                    <li><Link to="contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-widget">
                                <h5>My Account</h5>
                                <ul>
                                    <li><Link to="shop/cart">Shopping Cart</Link></li>
                                    <li><Link to="faq">Faq</Link></li>
                                    {!isLoggin && <li><Link to="login">Login</Link></li>}
                                    {!isLoggin && <li><Link to="login/register">Register</Link></li>}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="newslatter-item">
                                <h5>Join Our Newsletter Now</h5>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <form onSubmit={submitForm} className="subscribe-form">
                                    <input onChange={onChange} type="text" value={state} placeholder="Enter Your Mail" />
                                    <button type="submit">Subscribe</button>
                                    {errorMsg && <span className='error'>{errorMsg}</span>}
                                    {successMsg && <span className='success'>{successMsg}</span>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-reserved">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright-text">
                                    Copyright &copy;2022 All rights reserved
                                </div>
                                <div className="payment-pic">
                                    <img src="img/payment-method.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer