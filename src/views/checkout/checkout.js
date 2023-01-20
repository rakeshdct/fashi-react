import React from 'react'
import './../../styles/checkout.css';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { cartSelector, submitCartData } from "../cart/cart-dux";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cartData, cartTotal } = useSelector(cartSelector);
  const submitCart = e => {
    e.preventDefault();
    dispatch(submitCartData())
  }
  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text product-more">
                <Link to="../index"><i className="fa fa-home"></i> Home</Link>
                <Link to="../shop">Shop</Link>
                <span>Check Out</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="checkout-section spad">
        <div className="container">
          <form className="checkout-form" onSubmit={submitCart}>
            <div className="row">
              {cartData.length === 0 ? <div className="col-lg-12"> <div className='empty'><h4 >Order has been successfully placed.</h4><br /><br /><Link className="primary-btn" to="../shop" type="button">Continue Shopping</Link></div></div> : <><div className="col-lg-6">
                {/* <div className="checkout-content">
                  <Link to="../login" className="content-btn">Click Here To Login</Link>
                </div> */}
                <h4>Biiling Details</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="fir">First Name<span>*</span></label>
                    <input type="text" id="fir" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="last">Last Name<span>*</span></label>
                    <input type="text" id="last" />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="cun-name">Company Name</label>
                    <input type="text" id="cun-name" />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="cun">Country<span>*</span></label>
                    <input type="text" id="cun" />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="street">Street Address<span>*</span></label>
                    <input type="text" id="street" className="street-first" />
                    <input type="text" />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="zip">Postcode / ZIP (optional)</label>
                    <input type="text" id="zip" />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="town">Town / City<span>*</span></label>
                    <input type="text" id="town" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="email">Email Address<span>*</span></label>
                    <input type="text" id="email" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="phone">Phone<span>*</span></label>
                    <input type="text" id="phone" />
                  </div>
                  {/* <div className="col-lg-12">
                    <div className="create-item">
                      <label htmlFor="acc-create">
                        Create an account?
                        <input type="checkbox" id="acc-create" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div> */}
                </div>
              </div>
                <div className="col-lg-6">
                  {/* <div className="checkout-content">
                  &nbsp;
                  <input type="text" placeholder="Enter Your Coupon Code"/>
                </div> */}
                  <div className="place-order">
                    <h4>Your Order</h4>
                    <div className="order-total">
                      <ul className="order-table">
                        <li>Product <span>Total</span></li>
                        {
                          cartData.map((product, i) => (
                            <li key={i} className="fw-normal">{product.title} x {product.qty} <span>₹ {product.total}</span></li>
                          ))
                        }
                        {/* <li className="fw-normal">Combination x 1 <span>$60.00</span></li>
                      <li className="fw-normal">Combination x 1 <span>$60.00</span></li>
                      <li className="fw-normal">Combination x 1 <span>$120.00</span></li> */}
                        <li className="total-price">Subtotal <span>₹ {cartTotal.toLocaleString('en-IN')}</span></li>
                        <li className="total-price">9 % SGST <span>₹ {(Math.round(cartTotal * 9 / 100)).toLocaleString('en-IN')}</span></li>
                        <li className="total-price">9 % SGST <span>₹ {(Math.round(cartTotal * 9 / 100)).toLocaleString('en-IN')}</span></li>
                        <li className="total-price">Total <span>₹ {(Math.round(cartTotal + cartTotal * 18 / 100)).toLocaleString('en-IN')}</span></li>
                      </ul>
                      {/* <div className="checkout-content"><input type="text" placeholder="Enter Your Coupon Code" /></div>
                    <div className="payment-check">
                      <div className="pc-item">
                        <label htmlFor="pc-check">
                          Cheque Payment
                          <input type="checkbox" id="pc-check" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="pc-item">
                        <label htmlFor="pc-paypal">
                          Paypal
                          <input type="checkbox" id="pc-paypal" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div> */}
                      <div className="order-btn">
                        <button type='submit' className="site-btn place-btn">Place Order</button>
                      </div>
                    </div>
                  </div>
                </div></>}

            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Checkout