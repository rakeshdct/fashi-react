import React from 'react'
import { Link } from "react-router-dom";

const Product = (props) => {
    return (
        < div className="col-lg-4 col-sm-6" >
            <div className="product-item">
                <div className="pi-pic">
                    <img src={props.product.thumbnail} alt="" />
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
                    <div className="catagory-name">{props.tags}</div>
                    <Link to="#">
                        <h5>{props.product.title}</h5>
                    </Link>
                    <div className="product-price">
                        {props.product.price}
                        <span>{props.product.strikeprice}</span>
                    </div>
                </div>
            </div>
        </div >



    )
}

export default Product