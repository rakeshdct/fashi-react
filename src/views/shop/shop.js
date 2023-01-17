import { React, useEffect } from 'react'
import { Link } from "react-router-dom";
import './../../styles/shop.css';
import LeftNav from './leftNav';
import Product from './product';
import { useSelector, useDispatch } from 'react-redux';
import { fetchproductData, productSelector } from "./product-dux";
import ComponentPreLoader from '../componentPreLoader';


const Shop = () => {
  const dispatch = useDispatch();
  const { Categories, productData, loading } = useSelector(productSelector);
  useEffect(() => {
    dispatch(fetchproductData(Categories));
  }, [dispatch, Categories]);
  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <Link to="../"><i className="fa fa-home"></i> Home</Link>
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="product-shop spad">
        <div className="container">
          <div className="row">
            {!loading && <LeftNav details={productData.products} />}
            <div className="col-lg-9">
              <div className="product-show-option">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="select-option">
                      <select className="sorting">
                        <option value="">Default Sorting</option>
                      </select>
                      <select className="p-show">
                        <option value="">Show:</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 text-right">
                    <p>Show 01- 01 of 09 Product</p>
                  </div>
                </div>
              </div>
              <div className="product-list">
                <div className="row">
                  {
                    loading ? <ComponentPreLoader /> : productData.products.map((product, i) => (<Product key={i} index={i} product={product} />
                    ))
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

export default Shop