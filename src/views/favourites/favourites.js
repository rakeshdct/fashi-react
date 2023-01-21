import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import './../../styles/shop.css';
import { useSelector, useDispatch } from 'react-redux';
import { addCartData, setCartTotal } from "../cart/cart-dux";
import { pushFavouritestoproductData, selectedProductIndex, removeSelectedFavourites, productSelector } from "../shop/product-dux";
import { CurrencyConverter } from '../../components/currencyConverter';

const Favourites = () => {
    const dispatch = useDispatch();
    const { favouriteData } = useSelector(productSelector);
    useEffect(() => {
        dispatch(pushFavouritestoproductData(favouriteData))
    }, [dispatch, favouriteData])
    const addToCart = (d) => {
        dispatch(addCartData(d))
        dispatch(setCartTotal())
    }
    const removeFavouties = (i) => {
        dispatch(removeSelectedFavourites(i))
    }
    const productIndex = (i) => {
        dispatch(selectedProductIndex(i))
    }
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
                            {/* <div className="product-show-option">
                                <div className="row">
                                    <div className="col-lg-7 col-md-7">

                                    </div>
                                    <div className="col-lg-5 col-md-5 text-right">
                                        <p>Show 01- 09 Of 36 Product</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="product-list">
                                <div className="row">

                                    {favouriteData.products.length > 0 ? favouriteData.products.map((fav, i) => (
                                        <div className="col-lg-4 col-sm-6" key={i}>
                                            <div className="product-item">
                                                <div className="pi-pic">
                                                    <img src={fav.thumbnail} alt="" />
                                                    <div className="sale">Sale</div>
                                                    <div className="icon" onClick={() => removeFavouties(i)}>
                                                        <i className="ti-close"></i>
                                                    </div>
                                                    <ul>
                                                        <li onClick={() => addToCart(fav)} className="w-icon active"><Link title="Add to Cart" to="#"><i className="fa fa-cart-plus"></i></Link></li>
                                                        <li onClick={() => productIndex(i)} className="quick-view"><Link to="../shop/shop-details">Quick View</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="pi-text">
                                                    <div className="catagory-name">{fav.brand}</div>
                                                    <Link to="#">
                                                        <h5>{fav.title}</h5>
                                                    </Link>
                                                    <div className="product-price">
                                                        <CurrencyConverter price={fav.price} />
                                                        <span> <CurrencyConverter price={fav.strikeprice} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                        :
                                        <h4 className='empty'>Your Favourites is empty</h4>
                                    }
                                </div>
                            </div>
                            {/* <div className="loading-more">
                                <i className="icon_loading"></i>
                                <Link to="#">
                                    Loading More
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Favourites