import React, { memo } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";


const ProductDetails = (props) => {
    const passImage = (imgurl) => {
        document.getElementById("product-big-img").src = imgurl;
    }
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="product-pic-zoom">
                    <img id="product-big-img" src={props.products.thumbnail} alt="" />
                </div>
                <div className="product-thumbs">
                    <OwlCarousel className='product-thumbs-track ps-slider owl-carousel"' {...props.psSliderOwlConfig}>
                        {props.products.images.map((image, i) => (
                            <div key={i} className="pt">
                                <img onClick={(e) => passImage(e.target.getAttribute("src"))} src={image} alt="" /></div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="product-details">
                    <div className="pd-title">
                        <span>{props.products.brand}</span>
                        <h3>{props.products.title}</h3>
                        <Link to="#" className="heart-icon"><i className="icon_heart_alt"></i></Link>
                    </div>
                    <div className="pd-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <span>({props.products.rating})</span>
                    </div>
                    <div className="pd-desc">
                        <p>{props.products.description}</p>
                        <h4>₹ {props.products.price} <span>₹ {props.products.strikeprice}</span><span>{props.products.discountPercentage}</span></h4>
                    </div>
                    <div className="pd-color">
                        <h6>Color</h6>
                        <div className="pd-color-choose">
                            <div className="cc-item">
                                <input type="radio" id={'cc-'+props.products.color}  />
                                <label className={'cc-'+props.products.color} htmlFor={'cc-'+props.products.color}></label>
                            </div>
                        </div>
                    </div>
                    <div className="pd-size-choose">
                        <div className="sc-item">
                            <input type="radio" id="sm-size" />
                            <label htmlFor="sm-size">s</label>
                        </div>
                        <div className="sc-item">
                            <input type="radio" id="md-size" />
                            <label htmlFor="md-size">m</label>
                        </div>
                        <div className="sc-item">
                            <input type="radio" id="lg-size" />
                            <label htmlFor="lg-size">l</label>
                        </div>
                        <div className="sc-item">
                            <input type="radio" id="xl-size" />
                            <label htmlFor="xl-size">xs</label>
                        </div>
                    </div>
                    <div className="quantity">
                        <div className="pro-qty">
                            <input type="text" maxLength={4} />
                        </div>
                        <Link to="#" className="primary-btn pd-cart">Add To Cart</Link>
                    </div>
                    <ul className="pd-tags">
                        <li><span>CATEGORIES</span>: More Accessories, Wallets & Cases</li>
                        <li><span>TAGS</span>: {props.products.tags}</li>
                    </ul>
                    <div className="pd-share">
                        <div className="p-code">Sku : {props.products.sku}</div>
                        <div className="pd-social">
                            <Link to="#"><i className="ti-facebook"></i></Link>
                            <Link to="#"><i className="ti-twitter-alt"></i></Link>
                            <Link to="#"><i className="ti-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ProductDetails)