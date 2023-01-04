import React from 'react'
import { Link } from "react-router-dom";
import './../../styles/shop.css';


const Shop = () => {
  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <Link to="../"><i className="fa fa-home"></i> Home</Link>
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="product-shop spad">
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
              <div className="product-show-option">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="select-option">
                      <select className="sorting">
                        <option value="">Default Sorting</option>
                      </select>
                      <select className="p-show">
                        <option value="">Show:</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 text-right">
                    <p>Show 01- 09 Of 36 Product</p>
                  </div>
                </div>
              </div>
              <div className="product-list">
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="img/products/product-1.jpg" alt="" />
                        <div className="sale pp-sale">Sale</div>
                        <div className="icon">
                          <i className="icon_heart_alt"></i>
                        </div>
                        <ul>
                          <li className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>
                          <li className="quick-view"><Link to="shop-details">+ Quick View</Link></li>
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
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="img/products/product-2.jpg" alt="" />
                        <div className="icon">
                          <i className="icon_heart_alt"></i>
                        </div>
                        <ul>
                          <li className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>
                          <li className="quick-view"><Link to="shop-details">+ Quick View</Link></li>
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
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="img/products/product-3.jpg" alt="" />
                        <div className="icon">
                          <i className="icon_heart_alt"></i>
                        </div>
                        <ul>
                          <li className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>
                          <li className="quick-view"><Link to="shop-details">+ Quick View</Link></li>

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
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="img/products/product-4.jpg" alt="" />
                        <div className="icon">
                          <i className="icon_heart_alt"></i>
                        </div>
                        <ul>
                          <li className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>
                          <li className="quick-view"><Link to="shop-details">+ Quick View</Link></li>

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
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="img/products/product-5.jpg" alt="" />
                        <div className="icon">
                          <i className="icon_heart_alt"></i>
                        </div>
                        <ul>
                          <li className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>
                          <li className="quick-view"><Link to="shop-details">+ Quick View</Link></li>

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
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="img/products/product-6.jpg" alt="" />
                        <div className="icon">
                          <i className="icon_heart_alt"></i>
                        </div>
                        <ul>
                          <li className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>
                          <li className="quick-view"><Link to="shop-details">+ Quick View</Link></li>

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
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="img/products/product-7.jpg" alt="" />
                        <div className="sale pp-sale">Sale</div>
                        <div className="icon">
                          <i className="icon_heart_alt"></i>
                        </div>
                        <ul>
                          <li className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>
                          <li className="quick-view"><Link to="shop-details">+ Quick View</Link></li>

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
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="img/products/product-8.jpg" alt="" />
                        <div className="icon">
                          <i className="icon_heart_alt"></i>
                        </div>
                        <ul>
                          <li className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>
                          <li className="quick-view"><Link to="shop-details">+ Quick View</Link></li>

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
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="img/products/product-9.jpg" alt="" />
                        <div className="icon">
                          <i className="icon_heart_alt"></i>
                        </div>
                        <ul>
                          <li className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>
                          <li className="quick-view"><Link to="shop-details">+ Quick View</Link></li>

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

export default Shop