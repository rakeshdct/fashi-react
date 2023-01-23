import React, { useState } from 'react'
import './../../styles/checkout.css';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { cartSelector, submitCartData, setCartTotal } from "../cart/cart-dux";
import { clearCartProductsSKUs, checkCartFavourites } from "../shop/product-dux";
import { CurrencyConverter } from '../../components/currencyConverter';
import { countries } from './country'
import PreLoader from '../../components/pagePreLoader';

const Checkout = () => {
  const initial = {
    "firstname": "Rakesh",
    "lastname": "V",
    "company": "CTS",
    "address1": "8, Subbham Flats, Kovil Street",
    "address2": "Vijay nagar, Old Perungalathur",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "country": "India",
    "zipcode": "600063",
    "phone": "9123456789",
    "email": "poc@react.com",
  }
  const [formData, setFormData] = useState(initial);
  const [phoneCode, setphoneCode] = useState("+91");
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const { cartData, cartTotal } = useSelector(cartSelector);
  const onChange = e => {
    setErrorMsg('')
    if (e.target.name === "phone") {
      setFormData({ ...formData, [e.target.name]: e.target.value.slice(0, e.target.getAttribute("maxlength")) })
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    if (e.target.name === "country") setphoneCode(e.target.selectedOptions[0].getAttribute("code"))
  }
  var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const submitCart = e => {
    e.preventDefault();
    if (formData.firstname === '') return setErrorMsg("Enter first name")
    if (formData.lastname === '') return setErrorMsg("Enter last name")
    if (formData.address1 === '') return setErrorMsg("Enter address1")
    if (formData.address2 === '') return setErrorMsg("Enter address2")
    if (formData.city === '') return setErrorMsg("Enter city")
    if (formData.state === '') return setErrorMsg("Enter state")
    if (formData.zipcode === '') return setErrorMsg("Enter zipcode")
    if (formData.phone === '') return setErrorMsg("Enter phone no")
    if (formData.phone.length < 10) return setErrorMsg("Enter 10 digit phone no")
    if (formData.email === '') return setErrorMsg("Enter Email")
    if (emailRegex.test(formData.email) === false) return setErrorMsg('Enter valid Email address')
    else { setloading(true); setErrorMsg(''); setTimeout(function () { setFormData(initial); dispatch(submitCartData()); dispatch(setCartTotal()); dispatch(clearCartProductsSKUs()); dispatch(checkCartFavourites()); setloading(false); }, 1000) }
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
              {loading && <PreLoader />}
              {cartData.length === 0 ? <div className="col-lg-12"> <div className='empty'><h4 >Your order has been placed successfully.</h4><br /><br /><Link className="primary-btn" to="../shop" type="button">Continue Shopping</Link></div></div> : <><div className="col-lg-6">
                {/* <div className="checkout-content">
                  <Link to="../login" className="content-btn">Click Here To Login</Link>
                </div> */}
                <h4>Biiling Details</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="fir">First Name<span>*</span></label>
                    <input onChange={onChange} name="firstname" value={formData.firstname} type="text" id="fir" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="last">Last Name<span>*</span></label>
                    <input onChange={onChange} name="lastname" value={formData.lastname} type="text" id="last" />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="cun-name">Company Name</label>
                    <input onChange={onChange} name="company" value={formData.company} type="text" id="cun-name" />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="street1">Address 1<span>*</span></label>
                    <input onChange={onChange} name="address1" value={formData.address1} type="text" id="street1" className="street-first" />
                    <label htmlFor="street2">Address 2<span>*</span></label>
                    <input onChange={onChange} name="address2" value={formData.address2} type="text" id="street2" />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="town">City<span>*</span></label>
                    <input onChange={onChange} name="city" value={formData.city} type="text" id="town" />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="state">State<span>*</span></label>
                    <input onChange={onChange} name="state" value={formData.state} type="text" id="state" />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="phonecode">Country<span>*</span></label>
                    <select onChange={onChange} name="country" value={formData.country} id='phonecode'>
                      {
                        countries.map((country, i) => (
                          <option key={i} code={country.dial_code} value={country.name}>{country.name}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="zip">Postcode / ZIP code<span>*</span></label>
                    <input onChange={onChange} name="zipcode" value={formData.zipcode} type="text" id="zip" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="phone">Phone<span>*</span></label>
                    <div className='phone'>
                      <span>{phoneCode}</span>
                      <input onChange={onChange} name="phone" value={formData.phone} type="number" maxLength={10} id="phone" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="email">Email Address<span>*</span></label>
                    <input onChange={onChange} name="email" value={formData.email} type="text" id="email" />
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
                            <li key={i} className="fw-normal"><span>{product.title} <br />x {product.qty} </span><span><CurrencyConverter price={product.total} /></span></li>
                          ))
                        }
                        {/* <li className="fw-normal">Combination x 1 <span>$60.00</span></li>
                      <li className="fw-normal">Combination x 1 <span>$60.00</span></li>
                      <li className="fw-normal">Combination x 1 <span>$120.00</span></li> */}
                        <li className="total-price">Subtotal <span><CurrencyConverter price={cartTotal} /></span></li>
                        <li className="total-price">9 % SGST <span><CurrencyConverter price={cartTotal * 9 / 100} /></span></li>
                        <li className="total-price">9 % CGST <span><CurrencyConverter price={cartTotal * 9 / 100} /></span></li>
                        <li className="total-price">Grand Total <span><CurrencyConverter currencyDisplay="code" price={cartTotal + cartTotal * 18 / 100} /></span></li>
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
                      {errorMsg && <div className="alert alert-danger">
                        <strong>Error!</strong> {errorMsg}
                      </div>
                      }
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