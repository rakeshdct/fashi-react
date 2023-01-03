import { React, useEffect } from 'react'
import './../../styles/home.css';

const Home = () => {
    useEffect(() => {
        document.querySelectorAll('.set-bg').forEach(function (currdiv, i) {
            var bg = currdiv.getAttribute('data-setbg');
            currdiv.style.backgroundImage = 'url(' + bg + ')';
        });
    })

    return (
        <>
            <div className="banner-section spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-banner">
                                <img src="img/banner-1.jpg" alt="" />
                                <div className="inner-text">
                                    <h4>Men’s</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-banner">
                                <img src="img/banner-2.jpg" alt="" />
                                <div className="inner-text">
                                    <h4>Women’s</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-banner">
                                <img src="img/banner-3.jpg" alt="" />
                                <div className="inner-text">
                                    <h4>Kid’s</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="deal-of-week set-bg spad" data-setbg="img/time-bg.jpg">
                <div className="container">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h2>Deal Of The Week</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br /> do ipsum dolor sit amet,
                                consectetur adipisicing elit </p>
                            <div className="product-price">
                                $35.00
                                <span>/ HanBag</span>
                            </div>
                        </div>
                        <div className="countdown-timer" id="countdown">
                            <div className="cd-item">
                                <span>56</span>
                                <p>Days</p>
                            </div>
                            <div className="cd-item">
                                <span>12</span>
                                <p>Hrs</p>
                            </div>
                            <div className="cd-item">
                                <span>40</span>
                                <p>Mins</p>
                            </div>
                            <div className="cd-item">
                                <span>52</span>
                                <p>Secs</p>
                            </div>
                        </div>
                        <a href="./" className="primary-btn">Shop Now</a>
                    </div>
                </div>
            </section>
            <div className="instagram-photo">
                <div className="insta-item set-bg" data-setbg="img/insta-1.jpg">
                    <div className="inside-text">
                        <i className="ti-instagram"></i>
                        <h5><a href="./">colorlib_Collection</a></h5>
                    </div>
                </div>
                <div className="insta-item set-bg" data-setbg="img/insta-2.jpg">
                    <div className="inside-text">
                        <i className="ti-instagram"></i>
                        <h5><a href="./">colorlib_Collection</a></h5>
                    </div>
                </div>
                <div className="insta-item set-bg" data-setbg="img/insta-3.jpg">
                    <div className="inside-text">
                        <i className="ti-instagram"></i>
                        <h5><a href="./">colorlib_Collection</a></h5>
                    </div>
                </div>
                <div className="insta-item set-bg" data-setbg="img/insta-4.jpg">
                    <div className="inside-text">
                        <i className="ti-instagram"></i>
                        <h5><a href="./">colorlib_Collection</a></h5>
                    </div>
                </div>
                <div className="insta-item set-bg" data-setbg="img/insta-5.jpg">
                    <div className="inside-text">
                        <i className="ti-instagram"></i>
                        <h5><a href="./">colorlib_Collection</a></h5>
                    </div>
                </div>
                <div className="insta-item set-bg" data-setbg="img/insta-6.jpg">
                    <div className="inside-text">
                        <i className="ti-instagram"></i>
                        <h5><a href="./">colorlib_Collection</a></h5>
                    </div>
                </div>
            </div>
            <section className="latest-blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>From The Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-blog">
                                <img src="img/latest-1.jpg" alt="" />
                                <div className="latest-text">
                                    <div className="tag-list">
                                        <div className="tag-item">
                                            <i className="fa fa-calendar-o"></i>
                                            May 4,2019
                                        </div>
                                        <div className="tag-item">
                                            <i className="fa fa-comment-o"></i>
                                            5
                                        </div>
                                    </div>
                                    <a href="./">
                                        <h4>The Best Street Style From London Fashion Week</h4>
                                    </a>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-blog">
                                <img src="img/latest-2.jpg" alt="" />
                                <div className="latest-text">
                                    <div className="tag-list">
                                        <div className="tag-item">
                                            <i className="fa fa-calendar-o"></i>
                                            May 4,2019
                                        </div>
                                        <div className="tag-item">
                                            <i className="fa fa-comment-o"></i>
                                            5
                                        </div>
                                    </div>
                                    <a href="./">
                                        <h4>Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes</h4>
                                    </a>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-blog">
                                <img src="img/latest-3.jpg" alt="" />
                                <div className="latest-text">
                                    <div className="tag-list">
                                        <div className="tag-item">
                                            <i className="fa fa-calendar-o"></i>
                                            May 4,2019
                                        </div>
                                        <div className="tag-item">
                                            <i className="fa fa-comment-o"></i>
                                            5
                                        </div>
                                    </div>
                                    <a href="./">
                                        <h4>How To Brighten Your Wardrobe With A Dash Of Lime</h4>
                                    </a>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="benefit-items">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-benefit">
                                    <div className="sb-icon">
                                        <img src="img/icon-1.png" alt="" />
                                    </div>
                                    <div className="sb-text">
                                        <h6>Free Shipping</h6>
                                        <p>For all order over 99$</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-benefit">
                                    <div className="sb-icon">
                                        <img src="img/icon-2.png" alt="" />
                                    </div>
                                    <div className="sb-text">
                                        <h6>Delivery On Time</h6>
                                        <p>If good have prolems</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-benefit">
                                    <div className="sb-icon">
                                        <img src="img/icon-1.png" alt="" />
                                    </div>
                                    <div className="sb-text">
                                        <h6>Secure Payment</h6>
                                        <p>100% secure payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home