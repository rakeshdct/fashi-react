import React, { useState } from 'react'
import './../../styles/cart.css';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setCartTotal, setcartIndex, changeQtyCartData, cartSelector, removeCartData } from "./cart-dux";
import { removeCartSKUs, checkCartFavourites } from "../shop/product-dux";
import { CurrencyConverter } from '../../components/currencyConverter';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartData, cartTotal } = useSelector(cartSelector);
  let cartQuantities = {}
  cartData.map((product) => (
    cartQuantities[product.sku] = product.qty
  ))
  const [qty, setQty] = useState(cartQuantities);
  const removeCart = (i, sku) => {
    dispatch(removeCartData(i))
    dispatch(setCartTotal())
    dispatch(removeCartSKUs(sku))
    dispatch(checkCartFavourites())
  }
  const changeQty = (e, i) => {
    let value = e.target.value.slice(0, e.target.getAttribute("maxlength"))
    if (value === '0' || value === '') {
      value = 1;
    }
    const quantities = {};
    quantities[e.target.name] = value;
    setQty({ ...qty, ...quantities });
    dispatch(setcartIndex(i))
    dispatch(changeQtyCartData(parseInt(value)))
    dispatch(setCartTotal())
  }
  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text product-more">
                <Link to="../home"><i className="fa fa-home"></i> Home</Link>
                <Link to="../shop">Shop</Link>
                <span>Shopping Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            {
              cartData.length === 0 ? <div className="col-lg-12"> <div className='empty'><h4 >Your shopping cart is empty.</h4><br /><br /><Link className="primary-btn" to="../shop" type="button">Continue Shopping</Link></div></div> :
                <div className="col-lg-12">
                  <div className="cart-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th className="p-name">Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          cartData.map((product, i) => (
                            <tr key={i}>
                              <td className="cart-pic first-row"><img src={product.thumbnail} alt="" /></td>
                              <td className="cart-title first-row">
                                <h5>{product.title}</h5>
                              </td>
                              <td className="p-price first-row"><CurrencyConverter price={product.price} /></td>
                              <td className="qua-col first-row">
                                <div className="quantity">
                                  <div className="pro-qty">
                                    <input onChange={(e) => changeQty(e, i)} name={product.sku} type="number" value={qty[product.sku]} maxLength={4} />
                                  </div>
                                </div>
                              </td>
                              <td className="total-price first-row"><CurrencyConverter price={product.total} /></td>
                              <td className="close-td first-row"><i onClick={() => removeCart(i, product.sku)} className="ti-close"></i></td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="cart-buttons">
                        <Link to="../shop" className="primary-btn">Continue shopping</Link>
                        {/* <Link to="#" className="primary-btn up-cart">Update cart</Link> */}
                      </div>
                      {/* <div className="discount-coupon">
                        <h6>Discount Codes</h6>
                        <form action="#" className="coupon-form">
                          <input type="text" placeholder="Enter your codes" />
                          <button type="submit" className="site-btn coupon-btn">Apply</button>
                        </form>
                      </div> */}
                    </div>
                    <div className="col-lg-4 offset-lg-4">
                      <div className="proceed-checkout">
                        <ul>
                          <li className="subtotal">Subtotal <span><CurrencyConverter price={cartTotal} /></span></li>
                          <li className="subtotal">9 % SGST <span><CurrencyConverter price={cartTotal * 9 / 100} /></span></li>
                          <li className="subtotal">9 % CGST <span><CurrencyConverter price={cartTotal * 9 / 100} /></span></li>
                          <li className="cart-total">Grand Total <span><CurrencyConverter currencyDisplay="code" price={cartTotal + cartTotal * 18 / 100} /></span></li>
                        </ul>
                        <Link to="../shop/checkout" className="proceed-btn">PROCEED TO CHECK OUT</Link>
                      </div>
                    </div>
                  </div>
                </div>
            }


          </div>
        </div>
      </section>
    </>
  )
}

export default Cart