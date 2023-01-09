import { React, useState } from 'react'
import { Link } from "react-router-dom";
import { tabLists, Description, Specification, Review } from './productTabs'
import LeftNav from '../shop/leftNav'
import RelatedProducts from './relatedProducts'
import './../../styles/shop.css';

const Shopdetails = () => {
    const [state, setState] = useState(0);
    const handleSelection = (e, index) => {
        e.preventDefault();
        setState(index);
    }

    function tabContent(state) {
        switch (state) {
            case 0:
                return (
                    <Description />
                )
            case 1:
                return (
                    <Specification />
                )
            case 2:
                return (
                    <Review />
                )
            default:
                <Description />
        }
    }

    return (
        <>

            <div className="breacrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text product-more">
                                <Link to="../"><i className="fa fa-home"></i> Home</Link>
                                <Link to="../shop">Shop</Link>
                                <span>Detail</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="product-shop spad page-details">
                <div className="container">
                    <div className="row">
                       <LeftNav/>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="product-pic-zoom">
                                        <img className="product-big-img" src="../img/product-single/product-1.jpg" alt="" />
                                    </div>
                                    {/* <div className="product-thumbs">
                                        <div className="product-thumbs-track ps-slider owl-carousel">
                                            <div className="pt active" data-imgbigurl="img/product-single/product-1.jpg"><img
                                                 src="../img/product-single/product-1.jpg" alt="" /></div>
                                            <div className="pt" data-imgbigurl="img/product-single/product-2.jpg"><img
                                                 src="../img/product-single/product-2.jpg" alt="" /></div>
                                            <div className="pt" data-imgbigurl="img/product-single/product-3.jpg"><img
                                                 src="../img/product-single/product-3.jpg" alt="" /></div>
                                            <div className="pt" data-imgbigurl="img/product-single/product-3.jpg"><img
                                                 src="../img/product-single/product-3.jpg" alt="" /></div>
                                        </div>
                                    </div> */}
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
                                            <h4>$495.00 <span>629.99</span></h4>
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
                            <div className="product-tab">
                                <div className="tab-item">
                                    <ul className="nav" role="tablist">
                                        {
                                            tabLists.map((tabList, i) =>
                                                <li onClick={(e) => handleSelection(e, i)} key={i}>
                                                    <Link className={state === i ? 'active' : ''} >{tabList.tabname}</Link>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="tab-item-content">
                                    <div className="tab-content">
                                        {tabContent(state)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProducts/>
        </>
    )
}

export default Shopdetails