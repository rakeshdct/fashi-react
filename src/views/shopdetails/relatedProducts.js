import React from 'react'
import Product from '../shop/product';
import { useSelector } from 'react-redux';
import { productSelector } from "../shop/product-dux";

const RelatedProducts = () => {
    const { productData, selectedProduct } = useSelector(productSelector);
    return (
        <div className="related-products spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Related Products</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        productData.products.map((product, i) => (
                            selectedProduct === i ? <Product class="col-lg-3 col-sm-6 hide" key={i} index={i} product={product} /> : <Product class="col-lg-3 col-sm-6" key={i} index={i} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts