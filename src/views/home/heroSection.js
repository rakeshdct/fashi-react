import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectedCategory } from "../shop/product-dux";

const HeroSection = (props) => {
    const dispatch = useDispatch();
    const handleSelection = (catagory) => {
        dispatch(selectedCategory(catagory));
    }
    return (
        <section className="hero-section">
            <OwlCarousel className='hero-items owl-carousel' {...props.heroSectionOwlConfig}>
                {props.heroSections.map((heroSection, i) => (
                    <div className="single-hero-items set-bg" data-setbg={heroSection.imgsrc} key={i}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <span>{heroSection.category}</span>
                                    <h1>{heroSection.day}</h1>
                                    <p>{heroSection.desc}</p>
                                    <Link onClick={(e) => handleSelection(heroSection.link)} to="./shop" className="primary-btn">Shop Now</Link>
                                </div>
                            </div>
                            <div className="off-card">
                                <h2>{heroSection.sale} <span>{heroSection.offer}</span></h2>
                            </div>
                        </div>
                    </div>
                )
                )}

            </OwlCarousel>
        </section>
    )
}

export default HeroSection