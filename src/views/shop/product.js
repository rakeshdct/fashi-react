import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { headerSelector } from "../header-dux";
import { addCartData, setCartTotal } from "../cart/cart-dux";
import { selectedFavourites, selectedProductIndex, cartProductsSKUs, checkCart, checkCartFavourites, favouriteProductsSKUs, checkFavourites } from "../shop/product-dux";
import { CurrencyConverter } from '../../components/currencyConverter';

const Product = (props) => {
    const dispatch = useDispatch();
    const { isLoggin } = useSelector(headerSelector);
    useEffect(() => {
        dispatch(checkCart());
        dispatch(checkFavourites());
    }, [dispatch]);
    const addToCart = (d) => {
        dispatch(addCartData(d))
        dispatch(setCartTotal())
        dispatch(cartProductsSKUs(d.sku))
        dispatch(checkCart())
        dispatch(checkCartFavourites())
    }
    const addFavouties = (d) => {
        dispatch(selectedFavourites(d))
        dispatch(checkCartFavourites())
        dispatch(favouriteProductsSKUs(d.sku))
        dispatch(checkFavourites());
    }
    const productIndex = (i) => {
        dispatch(selectedProductIndex(i))
    }
    return (
        < div className={props.class} >
            <div className="product-item">
                <div className="pi-pic">
                    <img src={props.product.thumbnail} alt="" />
                    <div className="sale pp-sale">Sale</div>
                    {
                        isLoggin ? <>
                            {
                                props.product.favourite ? <>
                                    <div className="icon">
                                        <Link title='View Favourite' to="../shop/favourites">
                                            <i className="fa fa-heart"></i>
                                        </Link>
                                    </div>
                                </> : <div className="icon" title='Add to favourite' onClick={() => addFavouties(props.product)}>
                                    <i className="fa fa-heart-o"></i>
                                </div>
                            }
                        </> : <div className="icon">
                            <Link title='Login to Add favourites' to="../login">
                                <i className="fa fa-heart-o"></i>
                            </Link>
                        </div>
                    }

                    <ul>
                        {props.product.cart ? <li className="w-icon active"><Link title="Go to Cart" to="../shop/cart"><i className="fa fa-shopping-cart"></i></Link></li> : <li onClick={() => addToCart(props.product)} className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>}
                        <li onClick={() => productIndex(props.index)} className="quick-view"><Link to="../shop/shop-details">Quick View</Link></li>
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