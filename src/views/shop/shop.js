import { React, useEffect, useState, useCallback } from 'react'
import { Link } from "react-router-dom";
import './../../styles/shop.css';
import LeftNav from './leftNav';
import Product from './product';
import { useSelector, useDispatch } from 'react-redux';
import { filterdProducts, selectedFilters, fetchproductData, productSelector } from "./product-dux";
import ComponentPreLoader from './../../components/componentPreLoader';


const Shop = () => {
  const dispatch = useDispatch();
  const { filterdProduct, categories, productData, loading } = useSelector(productSelector);  
  const [targetValue, settargetValue] = useState()
  useEffect(() => {
    dispatch(fetchproductData(categories));
  }, [dispatch, categories]);

  const [state, setState] = useState({
    products: {},
    filters: new Set()
  })
  useEffect(() => {
    dispatch(selectedFilters(targetValue))
    dispatch(filterdProducts({ products: state.products }))
  }, [dispatch, targetValue, state]);
  useEffect(() => {
    setState({
      products: productData.products,
      filters: new Set(),
    })
  }, [productData.products]);
  const handleAddFavoutites = useCallback(event => {

  },[])
  const handleFilterChange = useCallback(event => {
    setState(previousState => {
      let filters;
      let products = productData.products;
      let radiofilters = new Set();
      settargetValue('')
      if (event.target.type === "checkbox") {
        filters = new Set(previousState.filters)
        if (event.target.checked) {
          filters.add(event.target.value)
        } else {
          filters.delete(event.target.value)
        }
        if (filters.size) {
          products = products.filter(product => {
            return filters.has(product.brand)
          })
        }

      }
      if (event.target.name === "color") {
        radiofilters.add(event.target.value)
        products = products.filter(product => {
          return radiofilters.has(product.color)
        })

      }
      if (event.target.name === "tag") {
        radiofilters.add(event.target.value)
        products = products.filter(product => {
          return radiofilters.has(product.tags)
        })

      }
      settargetValue(event.target.value)
      return {
        filters,
        products,
      }
    })
  }, [setState, productData.products])
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
            {!loading && <LeftNav details={productData.products} onFilterChange={handleFilterChange} />}
            <div className="col-lg-9">
              {/* <div className="product-show-option">
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
              </div> */}
              <div className="product-list">
                <div className="row">
                  {
                    //loading ? <ComponentPreLoader /> : productData.products.map((product, i) => (<Product key={i} index={i} product={product} /> ))
                    // loading ? <ComponentPreLoader /> :
                    //   intial ? productData.products.map((product, i) => (<Product key={i} index={i} product={product} />)) : state.products.map((product, i) => (<Product key={i} index={i} product={product} />))
                    loading ? <ComponentPreLoader /> : filterdProduct.products === undefined ? <ComponentPreLoader /> : filterdProduct.products.map((product, i) => (<Product addFavouties={handleAddFavoutites} key={i} index={i} product={product} />))

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