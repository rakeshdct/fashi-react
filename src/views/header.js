import { React, useState, useEffect } from 'react'
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, headerSelector } from "./header-dux";
import { cartSelector, removeCartData } from "./cart/cart-dux";
import { selectedCategory, fetchproductData, productSelector } from "./shop/product-dux";
import './../styles/header.css';

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggin } = useSelector(headerSelector);
  const { favouriteData } = useSelector(productSelector);
  const { cartData, cartTotal } = useSelector(cartSelector);
  const [user, setUser] = useState('');

  useEffect(() => {
    if (localStorage.getItem("auth") === 'true') {
      setUser(localStorage.getItem("user"))
      dispatch(login())
    }
  }, [isLoggin, dispatch]);
  const removeCart = (i) => {
    dispatch(removeCartData(i))
  }
  function toggleLogin() {
    dispatch(logout())
    localStorage.setItem('auth', false);
    localStorage.setItem('user', '');
  }
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
  const handleSelection = (catagory) => {
    dispatch(fetchproductData(catagory));
    dispatch(selectedCategory(catagory));
  }
  return (
    <>
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="ht-left">
              <div className="mail-service">
                <i className=" fa fa-envelope"></i>
                <a href="mailto:reactjs.poc@mailinator.com">reactjs.poc@mailinator.com</a>
              </div>
              <div className="phone-service">
                <i className=" fa fa-phone"></i>
                +12 34.567.890
              </div>
            </div>
            <div className="ht-right">
              <Link className={isLoggin ? "login-panel login" : "login-panel"} to="./login" ><i className="fa fa-user"></i>{isLoggin ? <span className='loginText'>Welcome, {user} !</span> : <span className='text'>Login</span>}<span className='menu'><span onClick={() => toggleLogin()}><i className="fa fa-sign-out"></i> Logout</span></span></Link>
              <div className="top-social">
                <a href="https://www.facebook.com/" target='blank'><i className="ti-facebook"></i></a>
                <a href="https://www.instagram.com/" target='blank'><i className="ti-instagram"></i></a>
                <a href="https://twitter.com/" target='blank'><i className="ti-twitter-alt"></i></a>
                <a href="https://www.pinterest.com/" target='blank'><i className="ti-pinterest"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="inner-header">
            <div className="row">
              <div className="col-lg-2 col-md-2">
                <div className="logo">
                  <Link to="/">
                    <img src="img/logo.png" alt="" />
                  </Link>
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
                  {
                    isLoggin && <li className="heart-icon">
                      <Link to="./shop/favourites">
                        <i className="icon_heart_alt"></i>
                        <span>{favouriteData.products.length}</span>
                      </Link>
                    </li>
                  }
                  <li className="cart-icon">
                    <Link to="#">
                      <i className="icon_bag_alt"></i>
                      <span> {cartData.length}</span>
                    </Link>
                    <div className="cart-hover">
                      {cartData.length === 0 ? <div className="select-button">
                        <p className='empty'>Your shopping cart is empty.</p>
                        <NavLink className="primary-btn view-card" to="../shop">Continue Shopping</NavLink>
                      </div> : <>


                        <div >
                          <div className="select-items">
                            <table>
                              <tbody>
                                {
                                  cartData.map((product, i) => (
                                    <tr key={i}>
                                      <td className="si-pic"><img src={product.thumbnail} alt="" /></td>
                                      <td className="si-text">
                                        <div className="product-selected">
                                          <p><span>₹ {product.price.toLocaleString('en-IN')} x {product.qty}</span> <span>₹ {product.total.toLocaleString('en-IN')}</span></p>
                                          <h6>{product.title}</h6>
                                        </div>
                                      </td>
                                      <td className="si-close">
                                        <i onClick={() => removeCart(i)} className="ti-close"></i>
                                      </td>
                                    </tr>
                                  ))
                                }
                              </tbody>
                            </table>
                          </div>
                          <div className="select-total">
                            <span>total:</span>
                            <h5>₹ {cartTotal.toLocaleString('en-IN')}</h5>
                          </div>
                          <div className="select-button">
                            <NavLink className="primary-btn view-card" to="shop/cart">VIEW CART</NavLink>
                            <NavLink className="primary-btn checkout-btn" to="shop/checkout">Checkout</NavLink>
                          </div>
                        </div>
                      </>}
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
                  <li><Link to="./shop" onClick={(e) => handleSelection("men")}>Men’s Clothing</Link></li>
                  <li><Link to="./shop" onClick={(e) => handleSelection("women")}>Women’s Clothing</Link></li>
                  <li><Link to="./shop" onClick={(e) => handleSelection("kids")}>Kid's Clothing</Link></li>
                </ul>
              </div>
            </div>
            <nav className="nav-menu mobile-menu">
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="shop">Shop</NavLink></li>
                <li><NavLink to="blog">Blog</NavLink></li>
                <li><NavLink to="contact">Contact</NavLink></li>
                <li><Link to="#">Pages</Link>
                  <ul className="dropdown">
                    <li><NavLink to="shop/cart">Shopping Cart</NavLink></li>
                    <li><NavLink to="blog/blog-details">Blog Details</NavLink></li>
                    <li><NavLink to="faq">Faq</NavLink></li>
                    {!isLoggin && <li><NavLink to="login">Login</NavLink></li>}
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
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="shop">Shop</NavLink></li>
                    <li><NavLink to="blog">Blog</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                    <li className="slicknav_collapsed slicknav_parent">
                      <a href='./' className="slicknav_item slicknav_row" onClick={toggleSubNav}>
                        Pages
                        <span className="slicknav_arrow">►</span>
                      </a>
                      <ul className="dropdown slicknav_hidden" role="menu" style={{ display: showMeSubNav ? "block" : "none" }}>
                        <li><NavLink to="shop/cart">Shopping Cart</NavLink></li>
                        <li><NavLink to="shop/checkout">Checkout</NavLink></li>
                        <li><NavLink to="blog/blog-details">Blog Details</NavLink></li>
                        <li><NavLink to="faq">Faq</NavLink></li>
                        <li><NavLink to="login">Login</NavLink></li>
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