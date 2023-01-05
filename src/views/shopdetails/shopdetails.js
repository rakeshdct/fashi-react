import { React, useState } from 'react'
import { Link } from "react-router-dom";
import './../../styles/shop.css';

const Shopdetails = () => {
    const initialState = { selected: 0 };
    const [state, setState] = useState(initialState);
    const handleSelection = (e, index) => {
        e.preventDefault();
        setState({
            ...state,
            selected: index
        });
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
                        <div className="col-lg-3 col-md-6 col-sm-8 produts-sidebar-filter">
                            <div className="filter-widget">
                                <h4 className="fw-title">Categories</h4>
                                <ul className="filter-catagories">
                                    <li><Link to="#">Men</Link></li>
                                    <li><Link to="#">Women</Link></li>
                                    <li><Link to="#">Kids</Link></li>
                                </ul>
                            </div>
                            <div className="filter-widget">
                                <h4 className="fw-title">Brand</h4>
                                <div className="fw-brand-check">
                                    <div className="bc-item">
                                        <label htmlFor="bc-calvin">
                                            Calvin Klein
                                            <input type="checkbox" id="bc-calvin" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="bc-item">
                                        <label htmlFor="bc-diesel">
                                            Diesel
                                            <input type="checkbox" id="bc-diesel" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="bc-item">
                                        <label htmlFor="bc-polo">
                                            Polo
                                            <input type="checkbox" id="bc-polo" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="bc-item">
                                        <label htmlFor="bc-tommy">
                                            Tommy Hilfiger
                                            <input type="checkbox" id="bc-tommy" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <h4 className="fw-title">Price</h4>
                                <div className="filter-range-wrap">
                                    <div className="range-slider">
                                        <div className="price-input">
                                            <input type="text" id="minamount" />
                                            <input type="text" id="maxamount" />
                                        </div>
                                    </div>
                                    <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min="33" data-max="98">
                                        <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                                        <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                        <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                    </div>
                                </div>
                                <Link to="#" className="filter-btn">Filter</Link>
                            </div>
                            <div className="filter-widget">
                                <h4 className="fw-title">Color</h4>
                                <div className="fw-color-choose">
                                    <div className="cs-item">
                                        <input type="radio" id="cs-black" />
                                        <label className="cs-black" htmlFor="cs-black">Black</label>
                                    </div>
                                    <div className="cs-item">
                                        <input type="radio" id="cs-violet" />
                                        <label className="cs-violet" htmlFor="cs-violet">Violet</label>
                                    </div>
                                    <div className="cs-item">
                                        <input type="radio" id="cs-blue" />
                                        <label className="cs-blue" htmlFor="cs-blue">Blue</label>
                                    </div>
                                    <div className="cs-item">
                                        <input type="radio" id="cs-yellow" />
                                        <label className="cs-yellow" htmlFor="cs-yellow">Yellow</label>
                                    </div>
                                    <div className="cs-item">
                                        <input type="radio" id="cs-red" />
                                        <label className="cs-red" htmlFor="cs-red">Red</label>
                                    </div>
                                    <div className="cs-item">
                                        <input type="radio" id="cs-green" />
                                        <label className="cs-green" htmlFor="cs-green">Green</label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <h4 className="fw-title">Size</h4>
                                <div className="fw-size-choose">
                                    <div className="sc-item">
                                        <input type="radio" id="s-size" />
                                        <label htmlFor="s-size">s</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" id="m-size" />
                                        <label htmlFor="m-size">m</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" id="l-size" />
                                        <label htmlFor="l-size">l</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" id="xs-size" />
                                        <label htmlFor="xs-size">xs</label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <h4 className="fw-title">Tags</h4>
                                <div className="fw-tags">
                                    <Link to="#">Towel</Link>
                                    <Link to="#">Shoes</Link>
                                    <Link to="#">Coat</Link>
                                    <Link to="#">Dresses</Link>
                                    <Link to="#">Trousers</Link>
                                    <Link to="#">Men's hats</Link>
                                    <Link to="#">Backpack</Link>
                                </div>
                            </div>
                        </div>
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
                                                <input type="text" />
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
                                        <li onClick={(e) => handleSelection(e, 0)}>
                                            <Link className={state.selected === 0 ? 'active' : ''} >DESCRIPTION</Link>
                                        </li>
                                        <li onClick={(e) => handleSelection(e, 1)}>
                                            <Link className={state.selected === 1 ? 'active' : ''}>SPECIFICATIONS</Link>
                                        </li>
                                        <li onClick={(e) => handleSelection(e, 2)}>
                                            <Link className={state.selected === 2 ? 'active' : ''}>Customer Reviews (02)</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-item-content">
                                    <div className="tab-content">
                                        <div className={state.selected === 0 ? 'tab-pane fade active show' : 'tab-pane fade'} id="tab-1" role="tabpanel">
                                            <div className="product-content">
                                                <div className="row">
                                                    <div className="col-lg-7">
                                                        <h5>Introduction</h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                                                        <h5>Features</h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <img src="../img/product-single/tab-desc.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={state.selected === 1 ? 'tab-pane fade active show' : 'tab-pane fade'} id="tab-2" role="tabpanel">
                                            <div className="specification-table">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className="p-catagory">Customer Rating</td>
                                                            <td>
                                                                <div className="pd-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                    <span>(5)</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-catagory">Price</td>
                                                            <td>
                                                                <div className="p-price">$495.00</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-catagory">Add To Cart</td>
                                                            <td>
                                                                <div className="cart-add">+ add to cart</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-catagory">Availability</td>
                                                            <td>
                                                                <div className="p-stock">22 in stock</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-catagory">Weight</td>
                                                            <td>
                                                                <div className="p-weight">1,3kg</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-catagory">Size</td>
                                                            <td>
                                                                <div className="p-size">Xxl</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-catagory">Color</td>
                                                            <td><span className="cs-color"></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-catagory">Sku</td>
                                                            <td>
                                                                <div className="p-code">00012</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className={state.selected === 2 ? 'tab-pane fade active show' : 'tab-pane fade'} id="tab-3" role="tabpanel">
                                            <div className="customer-review-option">
                                                <h4>2 Comments</h4>
                                                <div className="comment-option">
                                                    <div className="co-item">
                                                        <div className="avatar-pic">
                                                            <img src="../img/product-single/avatar-1.png" alt="" />
                                                        </div>
                                                        <div className="avatar-text">
                                                            <div className="at-rating">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-o"></i>
                                                            </div>
                                                            <h5>Brandon Kelley <span>27 Aug 2019</span></h5>
                                                            <div className="at-reply">Nice !</div>
                                                        </div>
                                                    </div>
                                                    <div className="co-item">
                                                        <div className="avatar-pic">
                                                            <img src="../img/product-single/avatar-2.png" alt="" />
                                                        </div>
                                                        <div className="avatar-text">
                                                            <div className="at-rating">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-o"></i>
                                                            </div>
                                                            <h5>Roy Banks <span>27 Aug 2019</span></h5>
                                                            <div className="at-reply">Nice !</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="personal-rating">
                                                    <h6>Your Ratind</h6>
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                                <div className="leave-comment">
                                                    <h4>Leave A Comment</h4>
                                                    <form action="#" className="comment-form">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <input type="text" placeholder="Name" />
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <input type="text" placeholder="Email" />
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <textarea placeholder="Messages"></textarea>
                                                                <button type="submit" className="site-btn">Send message</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="related-products spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Related Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="../img/products/women-1.jpg" alt="" />
                                    <div className="sale">Sale</div>
                                    <div className="icon">
                                        <i className="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>
                                        <li className="quick-view"><Link to="../shop/shop-details">+ Quick View</Link></li>

                                    </ul>
                                </div>
                                <div className="pi-text">
                                    <div className="catagory-name">Coat</div>
                                    <Link to="#">
                                        <h5>Pure Pineapple</h5>
                                    </Link>
                                    <div className="product-price">
                                        $14.00
                                        <span>$35.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="../img/products/women-2.jpg" alt="" />
                                    <div className="icon">
                                        <i className="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>
                                        <li className="quick-view"><Link to="../shop/shop-details">+ Quick View</Link></li>

                                    </ul>
                                </div>
                                <div className="pi-text">
                                    <div className="catagory-name">Shoes</div>
                                    <Link to="#">
                                        <h5>Guangzhou sweater</h5>
                                    </Link>
                                    <div className="product-price">
                                        $13.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="../img/products/women-3.jpg" alt="" />
                                    <div className="icon">
                                        <i className="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>
                                        <li className="quick-view"><Link to="../shop/shop-details">+ Quick View</Link></li>

                                    </ul>
                                </div>
                                <div className="pi-text">
                                    <div className="catagory-name">Towel</div>
                                    <Link to="#">
                                        <h5>Pure Pineapple</h5>
                                    </Link>
                                    <div className="product-price">
                                        $34.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="../img/products/women-4.jpg" alt="" />
                                    <div className="icon">
                                        <i className="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>
                                        <li className="quick-view"><Link to="../shop/shop-details">+ Quick View</Link></li>

                                    </ul>
                                </div>
                                <div className="pi-text">
                                    <div className="catagory-name">Towel</div>
                                    <Link to="#">
                                        <h5>Converse Shoes</h5>
                                    </Link>
                                    <div className="product-price">
                                        $34.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shopdetails