import { React, useState } from 'react'
import './../styles/header.css';

const Header = () => {
  const [showMeNav, setShowMeNav] = useState(false);
  function toggleNav(e) {
    e.preventDefault();
    setShowMeNav(!showMeNav);
  }
  const [showMeSubNav, setShowMeSubNav] = useState(false);
  function toggleSubNav(e) {
    e.preventDefault();
    setShowMeSubNav(!showMeSubNav);
  }
  return (
    <>
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="ht-left">
              <div className="mail-service">
                <i className=" fa fa-envelope"></i>
                <a href="mailto:hello.colorlib@gmail.com">hello.colorlib@gmail.com</a>
              </div>
              <div className="phone-service">
                <i className=" fa fa-phone"></i>
                +65 11.188.888
              </div>
            </div>
            <div className="ht-right">
              <a href="./login" className="login-panel"><i className="fa fa-user"></i>Login</a>
              <div className="top-social">
                <a href="./"><i className="ti-facebook"></i></a>
                <a href="./"><i className="ti-twitter-alt"></i></a>
                <a href="./"><i className="ti-linkedin"></i></a>
                <a href="./"><i className="ti-pinterest"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="inner-header">
            <div className="row">
              <div className="col-lg-2 col-md-2">
                <div className="logo">
                  <a href="/">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-7 col-md-7">
                <div className="advanced-search">
                  <button type="button" className="category-btn">All Categories</button>
                  <div className="input-group">
                    <input type="text" placeholder="What do you need?" />
                    <button type="button"><i className="ti-search"></i></button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 text-right col-md-3">
                <ul className="nav-right">
                  <li className="heart-icon">
                    <a href="./">
                      <i className="icon_heart_alt"></i>
                      <span>1</span>
                    </a>
                  </li>
                  <li className="cart-icon">
                    <a href="./">
                      <i className="icon_bag_alt"></i>
                      <span>3</span>
                    </a>
                    <div className="cart-hover">
                      <div className="select-items">
                        <table>
                          <tbody>
                            <tr>
                              <td className="si-pic"><img src="img/select-product-1.jpg" alt="" /></td>
                              <td className="si-text">
                                <div className="product-selected">
                                  <p>$60.00 x 1</p>
                                  <h6>Kabino Bedside Table</h6>
                                </div>
                              </td>
                              <td className="si-close">
                                <i className="ti-close"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="si-pic"><img src="img/select-product-2.jpg" alt="" /></td>
                              <td className="si-text">
                                <div className="product-selected">
                                  <p>$60.00 x 1</p>
                                  <h6>Kabino Bedside Table</h6>
                                </div>
                              </td>
                              <td className="si-close">
                                <i className="ti-close"></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="select-total">
                        <span>total:</span>
                        <h5>$120.00</h5>
                      </div>
                      <div className="select-button">
                        <a href="./" className="primary-btn view-card">VIEW CARD</a>
                        <a href="./" className="primary-btn checkout-btn">CHECK OUT</a>
                      </div>
                    </div>
                  </li>
                  <li className="cart-price">$150.00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-item">
          <div className="container">
            <div className="nav-depart">
              <div className="depart-btn">
                <i className="ti-menu"></i>
                <span>All departments</span>
                <ul className="depart-hover">
                  <li className="active"><a href="./">Women’s Clothing</a></li>
                  <li><a href="./">Men’s Clothing</a></li>
                  <li><a href="./">Underwear</a></li>
                  <li><a href="./">Kid's Clothing</a></li>
                  <li><a href="./">Brand Fashion</a></li>
                  <li><a href="./">Accessories/Shoes</a></li>
                  <li><a href="./">Luxury Brands</a></li>
                  <li><a href="./">Brand Outdoor Apparel</a></li>
                </ul>
              </div>
            </div>
            <nav className="nav-menu mobile-menu">
              <ul>
                <li className="active"><a href="/">Home</a></li>
                <li><a href="./shop">Shop</a></li>
                <li><a href="./blog">Blog</a></li>
                <li><a href="./contact">Contact</a></li>
                <li><a href="./">Pages</a>
                  <ul className="dropdown">
                    <li><a href="./blog-details">Blog Details</a></li>
                    <li><a href="./shopping-cart">Shopping Cart</a></li>
                    <li><a href="./check-out">Checkout</a></li>
                    <li><a href="./faq">Faq</a></li>
                    <li><a href="./register">Register</a></li>
                    <li><a href="./login">Login</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div id="mobile-menu-wrap">
              <div className="slicknav_menu">
                <a href='./' className="slicknav_btn slicknav_open" onClick={toggleNav}>
                  <span className="slicknav_menutxt">MENU</span>
                  <span className="slicknav_icon">
                    <span className="slicknav_icon-bar"></span>
                    <span className="slicknav_icon-bar"></span>
                    <span className="slicknav_icon-bar"></span>
                  </span>
                </a>
                <nav className="slicknav_nav" aria-hidden="false" role="menu" style={{ display: showMeNav ? "block" : "none" }} >
                  <ul>
                    <li><a href="./" role="menuitem">Home</a></li>
                    <li><a href="./shop" role="menuitem">Shop</a></li>
                    <li><a href="./blog" role="menuitem">Blog</a></li>
                    <li><a href="./contact" role="menuitem">Contact</a></li>
                    <li className="slicknav_collapsed slicknav_parent">
                      <a href='./' className="slicknav_item slicknav_row" onClick={toggleSubNav}>
                        Pages
                        <span className="slicknav_arrow">►</span>
                      </a>
                      <ul className="dropdown slicknav_hidden" role="menu" style={{ display: showMeSubNav ? "block" : "none" }}>
                        <li><a href="./blog-details" >Blog Details</a></li>
                        <li><a href="./shopping-cart" >Shopping Cart</a></li>
                        <li><a href="./check-out" >Checkout</a></li>
                        <li><a href="./faq" >Faq</a></li>
                        <li><a href="./register" >Register</a></li>
                        <li><a href="./login" >Login</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header