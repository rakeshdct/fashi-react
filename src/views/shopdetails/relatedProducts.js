import React from 'react'
import { Link } from "react-router-dom";

const RelatedProducts = () => {
    return (
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
    )
}

export default RelatedProducts