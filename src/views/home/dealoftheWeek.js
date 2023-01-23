import React from 'react'
import { Link } from "react-router-dom";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <>
                <div className="cd-item">
                    <span>{days}</span>
                    <p>Days</p>
                </div>
                <div className="cd-item">
                    <span>{hours}</span>
                    <p>Hrs</p>
                </div>
                <div className="cd-item">
                    <span>{minutes}</span>
                    <p>Mins</p>
                </div>
                <div className="cd-item">
                    <span>{seconds}</span>
                    <p>Secs</p>
                </div>
            </>
        );
    }
};

const DealoftheWeek = () => {
    return (
        <section className="deal-of-week set-bg spad" data-setbg="img/time-bg.jpg">
            <div className="container">
                <div className="col-lg-6 text-center">
                    <div className="section-title">
                        <h2>Deal Of The Week</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br /> do ipsum dolor sit amet,
                            consectetur adipisicing elit </p>
                        <div className="product-price">
                            ₹350.00
                            <span>/ Dress</span>
                        </div>
                    </div>
                    <div className="countdown-timer" id="countdown">
                        <Countdown date={Date.now() + 2597000000} renderer={renderer} />
                    </div>
                    <Link to="./shop" className="primary-btn">Shop Now</Link>
                </div>
            </div>
        </section>
    )
}

export default DealoftheWeek