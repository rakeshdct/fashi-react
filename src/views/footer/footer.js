import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchfooterData, footerSelector } from "./footer-dux";
import Partnerlogo from './partnerLogo'
import ComponentPreLoader from './../../components/componentPreLoader';
import { headerSelector } from "./../header-dux";
import './../../styles/footer.css';


const Footer = () => {
    const dispatch = useDispatch();
    const { footerData, loading } = useSelector(footerSelector);

    useEffect(() => {
        dispatch(fetchfooterData());
    }, [dispatch]);
    const { isLoggin } = useSelector(headerSelector);
    return (
        <>
            <div className="partner-logo">
                <div className="container">
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
                                    <a href="./"><img src="img/footer-logo.png" alt="" /></a>
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
                                <form action="#" className="subscribe-form">
                                    <input type="text" placeholder="Enter Your Mail" />
                                    <button type="button">Subscribe</button>
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