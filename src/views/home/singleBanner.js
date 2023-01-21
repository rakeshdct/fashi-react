import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectedCategory } from "../shop/product-dux";

const Singlebanner = (props) => {
    const dispatch = useDispatch();
    const handleSelection = (catagory) => {
        dispatch(selectedCategory(catagory));
    }
    return (
        <div className="banner-section spad">
            <div className="container-fluid">
                <div className="row">
                    {props.singleBanners.map((singleBanner, i) =>
                    (<div className="col-lg-4" key={i}>
                        <div className="single-banner">
                            <img src={singleBanner.imgsrc} alt="" />
                            <div className="inner-text">
                                <h4><Link onClick={(e) => handleSelection(singleBanner.link)} to="./shop">{singleBanner.category} </Link></h4>
                            </div>
                        </div>
                    </div>)
                    )}
                </div>
            </div>
        </div>

    )
}

export default Singlebanner