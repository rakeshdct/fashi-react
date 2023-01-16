import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";


const ProductDetails = (props) => {
    const passImage = (imgurl) => {
        document.getElementById("product-big-img").src = imgurl;
    }
    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="product-pic-zoom">
                    <img id="product-big-img" src="https://rukminim1.flixcart.com/image/832/832/kf1fo280hlty2aw-0/jacket/e/v/e/l-1-hljk000012-highlander-original-imafvnaym8z2mtfh.jpeg?q=70" alt="" />
                </div>
                <div className="product-thumbs">
                    <OwlCarousel className='product-thumbs-track ps-slider owl-carousel"' {...props.psSliderOwlConfig}>
                        <div className="pt">
                            <img onClick={(e) => passImage(e.target.getAttribute("src"))} src="https://rukminim1.flixcart.com/image/832/832/kf1fo280hlty2aw-0/jacket/e/v/e/l-1-hljk000012-highlander-original-imafvnaym8z2mtfh.jpeg?q=70" alt="" /></div>
                        <div className="pt">
                            <img onClick={(e) => passImage(e.target.getAttribute("src"))} src="https://rukminim1.flixcart.com/image/832/832/kf1fo280hlty2aw-0/jacket/y/r/c/l-1-hljk000012-highlander-original-imafvnaydtruaztf.jpeg?q=70" alt="" /></div>
                        <div className="pt">
                            <img onClick={(e) => passImage(e.target.getAttribute("src"))} src="https://rukminim1.flixcart.com/image/832/832/kf1fo280hlty2aw-0/jacket/g/k/x/l-1-hljk000012-highlander-original-imafvnayxvrfhusq.jpeg?q=70" alt="" /></div>
                        <div className="pt">
                            <img onClick={(e) => passImage(e.target.getAttribute("src"))} src="https://rukminim1.flixcart.com/image/832/832/jz4g3gw0/jacket/b/k/v/m-hljk000012-highlander-original-imafj7ztynxgchte.jpeg?q=70" alt="" /></div>
                    </OwlCarousel>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="product-details">
                    <div className="pd-title">
                        <span>oranges</span>
                        <h3>Pure Pineapple</h3>
                        <Link to="#" className="heart-icon"><i className="icon_heart_alt"></i></Link>
                    </div>
                    <div className="pd-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <span>(5)</span>
                    </div>
                    <div className="pd-desc">
                        <p>Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor sum dolor
                            sit amet, consectetur adipisicing elit, sed do mod tempor</p>
                        <h4>$495.00 <span>629.99</span><span>76% off</span></h4>
                    </div>
                    <div className="pd-color">
                        <h6>Color</h6>
                        <div className="pd-color-choose">
                            <div className="cc-item">
                                <input type="radio" id="cc-black" />
                                <label htmlFor="cc-black"></label>
                            </div>
                            <div className="cc-item">
                                <input type="radio" id="cc-yellow" />
                                <label htmlFor="cc-yellow" className="cc-yellow"></label>
                            </div>
                            <div className="cc-item">
                                <input type="radio" id="cc-violet" />
                                <label htmlFor="cc-violet" className="cc-violet"></label>
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
                        <li><span>TAGS</span>: Clothing, T-shirt, Woman</li>
                    </ul>
                    <div className="pd-share">
                        <div className="p-code">Sku : 00012</div>
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

export default ProductDetails