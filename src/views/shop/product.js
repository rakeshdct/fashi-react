import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { headerSelector } from "../header-dux";
import { addCartData, setCartTotal } from "../cart/cart-dux";
import { selectedFavourites, selectedProductIndex } from "../shop/product-dux";
import { CurrencyConverter } from '../../components/currencyConverter';

const Product = (props) => {
    const dispatch = useDispatch();
    const { isLoggin } = useSelector(headerSelector);
    const addToCart = (d) => {
        dispatch(addCartData(d))
        dispatch(setCartTotal())
    }
    const addFavouties = (d) => {
        dispatch(selectedFavourites(d))
    }
    const productIndex = (i) => {
        dispatch(selectedProductIndex(i))
    }
    return (
        < div className="col-lg-4 col-sm-6" >
            <div className="product-item">
                <div className="pi-pic">
                    <img src={props.product.thumbnail} alt="" />
                    <div className="sale pp-sale">Sale</div>
                    {
                        isLoggin ? <div className="icon" onClick={() => addFavouties(props.product)}>
                            <i className="fa fa-heart-o"></i>
                        </div> : <div className="icon">
                            <Link to="../login">
                                <i className="fa fa-heart-o"></i>
                            </Link>
                        </div>
                    }

                    <ul>
                        <li onClick={() => addToCart(props.product)} className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>
                        <li onClick={() => productIndex(props.index)} className="quick-view"><Link to="shop-details">Quick View</Link></li>
                    </ul>
                </div>
                <div className="pi-text">
                    <div className="catagory-name">{props.product.brand}</div>
                    <Link to="#">
                        <h5>{props.product.title}</h5>
                    </Link>
                    <div className="product-price">
                        <CurrencyConverter price={props.product.price} />
                        <span><CurrencyConverter price={props.product.strikeprice} /></span>
                    </div>
                </div>
            </div>
        </div >



    )
}

export default Product