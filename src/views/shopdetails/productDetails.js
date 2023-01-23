import React, { memo } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addCartData, setCartTotal } from "../cart/cart-dux";
import { cartProductsSKUs, checkCart, checkCartFavourites } from "../shop/product-dux";
import { CurrencyConverter } from '../../components/currencyConverter';


const ProductDetails = (props) => {
    const dispatch = useDispatch();
    //const [qty, setQty] = useState(props.products.qty);
    const addToCart = (d) => {
        dispatch(addCartData(d))
        dispatch(setCartTotal())
        dispatch(cartProductsSKUs(d.sku))
        dispatch(checkCart())
        dispatch(checkCartFavourites())
    }
    const passImage = (imgurl) => {
        document.getElementById("product-big-img").src = imgurl;
    }
    // const changeQty = (e, i) => {
    //     let value = e.target.value
    //     if (value === '0' || value === '') {
    //         value = 1;
    //     }
    //     setQty(value);
    // }
    let stars = []
    let nostars = []
    let rating = props.products.rating;
    let nostar = 5 - rating;
    for (let i = 0; i < rating; i++) {
        stars.push(<i key={i} className="fa fa-star"></i>)
    }
    for (let j = 0; j < nostar; j++) {
        nostars.push(<i key={j} className="fa fa-star-o"></i>)
    }
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="product-pic-zoom">
                    <img id="product-big-img" src={props.products.thumbnail} alt="" />
                </div>
                <div className="product-thumbs">
                    <OwlCarousel key={`carousel_${props.products.id}`} className='product-thumbs-track ps-slider owl-carousel"' {...props.psSliderOwlConfig}>
                        {props.products.images.map((image, i) => (
                            <div key={i} className="pt">
                                <img onClick={(e) => passImage(e.target.getAttribute("src"))} src={image} alt="" /></div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="product-details">
                    <div className="pd-title">
                        <span>{props.products.brand}</span>
                        <h3>{props.products.title}</h3>
                        {/* <Link to="#" className="heart-icon"><i className="icon_heart_alt"></i></Link> */}
                    </div>
                    <div className="pd-rating">
                        {
                            stars
                        }
                        {
                            nostars
                        }
                        {/* <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i> */}
                        <span>({props.products.rating})</span>
                    </div>
                    <div className="pd-desc">
                        <p>{props.products.description}</p>
                        <h4><CurrencyConverter price={props.products.price} /> <span><CurrencyConverter price={props.products.strikeprice} /></span><span>{props.products.discountPercentage}</span></h4>
                    </div>
                    <div className="pd-color">
                        <h6>Color</h6>
                        <div className="pd-color-choose">
                            <div className="cc-item">
                                <input type="radio" id={'cc-' + props.products.color} />
                                <label className={'cc-' + props.products.color} htmlFor={'cc-' + props.products.color}></label>
                            </div>
                        </div>
                    </div>
                    <div className="pd-size-choose">
                        <div className="sc-item">
                            <input type="radio" id="sm-size" />
                            <label htmlFor="sm-size">s</label>
                        </div>
                        <div className="sc-item">
                            <input type="radio" id="md-size" />
                            <label htmlFor="md-size">m</label>
                        </div>
                        <div className="sc-item">
                            <input type="radio" id="lg-size" />
                            <label htmlFor="lg-size">l</label>
                        </div>
                        <div className="sc-item">
                            <input type="radio" id="xl-size" />
                            <label htmlFor="xl-size">xs</label>
                        </div>
                    </div>
                    <div className="quantity">
                        {/* <div className="pro-qty">
                            <input type="text" value={qty} onChange={(e) => changeQty(e)} maxLength={4} />
                        </div> */}
                        {props.products.cart ? <Link to="../shop/cart" className="primary-btn pd-cart">View Cart</Link> :
                            <Link onClick={() => addToCart(props.products)} to="#" className="primary-btn pd-cart">Add To Cart</Link>
                        }

                    </div>
                    <ul className="pd-tags">
                        <li><span>CATEGORY</span>: {props.products.category}</li>
                        <li><span>TAGS</span>: {props.products.tags}</li>
                    </ul>
                    <div className="pd-share">
                        <div className="p-code">Sku : {props.products.sku}</div>
                        <div className="pd-social">
                            <Link to="#"><i className="ti-facebook"></i></Link>
                            <Link to="#"><i className="ti-twitter-alt"></i></Link>
                            <Link to="#"><i className="ti-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ProductDetails)