import React from 'react'
import { Link } from "react-router-dom";
import './../../styles/shop.css';

const Favourites = () => {
    return (
        <>
            <div className="breacrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <Link to="../"><i className="fa fa-home"></i> Home</Link>
                                <Link to="../shop">Shop</Link>
                                <span>Favourites</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="product-shop spad favourites">
                <div className="container">
                    <div className="row">                        
                        <div className="col-lg-12">
                            <div className="product-show-option">
                                <div className="row">
                                    <div className="col-lg-7 col-md-7">
                                      
                                    </div>
                                    <div className="col-lg-5 col-md-5 text-right">
                                        <p>Show 01- 09 Of 36 Product</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-list">
                                <div className="row">
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="../img/products/product-1.jpg" alt="" />
                                                <div className="sale pp-sale">Sale</div>
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
                                                    $14.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="../img/products/product-2.jpg" alt="" />
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
                                                    <h5>Guangzhou sweater</h5>
                                                </Link>
                                                <div className="product-price">
                                                    $13.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="../img/products/product-3.jpg" alt="" />
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
                                                    $34.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="../img/products/product-4.jpg" alt="" />
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
                                                    <h5>Microfiber Wool Scarf</h5>
                                                </Link>
                                                <div className="product-price">
                                                    $64.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="../img/products/product-5.jpg" alt="" />
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
                                                    <h5>Men's Painted Hat</h5>
                                                </Link>
                                                <div className="product-price">
                                                    $44.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="../img/products/product-6.jpg" alt="" />
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
                                                    <h5>Converse Shoes</h5>
                                                </Link>
                                                <div className="product-price">
                                                    $34.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="../img/products/product-7.jpg" alt="" />
                                                <div className="sale pp-sale">Sale</div>
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
                                                    $64.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="../img/products/product-8.jpg" alt="" />
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
                                                    <h5>2 Layer Windbreaker</h5>
                                                </Link>
                                                <div className="product-price">
                                                    $44.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="../img/products/product-9.jpg" alt="" />
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
                                                    <h5>Converse Shoes</h5>
                                                </Link>
                                                <div className="product-price">
                                                    $34.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="loading-more">
                                <i className="icon_loading"></i>
                                <Link to="#">
                                    Loading More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Favourites