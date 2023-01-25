import { React, useState } from 'react'
import { Link } from "react-router-dom";
import { tabLists, Description, Specification, Review } from './productTabs'
import './../../styles/shop.css';
import ProductDetails from './productDetails';
import { useSelector } from 'react-redux';
import { productSelector } from "../shop/product-dux";

const Favouritedetails = () => {
    const { selectedProduct, favouriteData } = useSelector(productSelector);
    const [state, setState] = useState(0);
    const handleSelection = (e, index) => {
        e.preventDefault();
        setState(index);
    }
    function tabContent(state) {
        switch (state) {
            case 0:
                return (
                    <Description />
                )
            case 1:
                return (
                    <Specification />
                )
            case 2:
                return (
                    <Review />
                )
            default:
                <Description />
        }
    }

    return (
        <>
            <div className="breacrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text product-more">
                                <Link to="../"><i className="fa fa-home"></i> Home</Link>
                                <Link to="../shop">Shop</Link>
                                <span>Detail</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="product-shop spad page-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {
                                <ProductDetails psSliderOwlConfig={favouriteData.psSliderOwlConfig} products={favouriteData.products[selectedProduct]} />
                            }
                            <div className="product-tab">
                                <div className="tab-item">
                                    <ul className="nav" role="tablist">
                                        {
                                            tabLists.map((tabList, i) =>
                                                <li onClick={(e) => handleSelection(e, i)} key={i}>
                                                    <Link className={state === i ? 'active' : ''} >{tabList.tabname}</Link>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="tab-item-content">
                                    <div className="tab-content">
                                        {tabContent(state)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Favouritedetails