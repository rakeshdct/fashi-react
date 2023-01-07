import React from 'react'

export const tabLists = [
    {
        "tabname":"DESCRIPTION"
    },
    {
        "tabname":"SPECIFICATIONS"
    },
    {
        "tabname":"Customer Reviews (02)"
    }
]

export const Description = () => {
    return (
        <div className='tab-pane fade active show' id="tab-1" role="tabpanel">
            <div className="product-content">
                <div className="row">
                    <div className="col-lg-7">
                        <h5>Introduction</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                        <h5>Features</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                    </div>
                    <div className="col-lg-5">
                        <img src="../img/product-single/tab-desc.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export const Specification = () => {
    return (
        <div className='tab-pane fade active show' id="tab-2" role="tabpanel">
            <div className="specification-table">
                <table>
                    <tbody>
                        <tr>
                            <td className="p-catagory">Customer Rating</td>
                            <td>
                                <div className="pd-rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                    <span>(5)</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-catagory">Price</td>
                            <td>
                                <div className="p-price">$495.00</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-catagory">Add To Cart</td>
                            <td>
                                <div className="cart-add">+ add to cart</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-catagory">Availability</td>
                            <td>
                                <div className="p-stock">22 in stock</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-catagory">Weight</td>
                            <td>
                                <div className="p-weight">1,3kg</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-catagory">Size</td>
                            <td>
                                <div className="p-size">Xxl</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-catagory">Color</td>
                            <td><span className="cs-color"></span></td>
                        </tr>
                        <tr>
                            <td className="p-catagory">Sku</td>
                            <td>
                                <div className="p-code">00012</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export const Review = () => {
    return (
        <div className='tab-pane fade active show' id="tab-3" role="tabpanel">
            <div className="customer-review-option">
                <h4>2 Comments</h4>
                <div className="comment-option">
                    <div className="co-item">
                        <div className="avatar-pic">
                            <img src="../img/product-single/avatar-1.png" alt="" />
                        </div>
                        <div className="avatar-text">
                            <div className="at-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>Brandon Kelley <span>27 Aug 2019</span></h5>
                            <div className="at-reply">Nice !</div>
                        </div>
                    </div>
                    <div className="co-item">
                        <div className="avatar-pic">
                            <img src="../img/product-single/avatar-2.png" alt="" />
                        </div>
                        <div className="avatar-text">
                            <div className="at-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>Roy Banks <span>27 Aug 2019</span></h5>
                            <div className="at-reply">Nice !</div>
                        </div>
                    </div>
                </div>
                <div className="personal-rating">
                    <h6>Your Ratind</h6>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                </div>
                <div className="leave-comment">
                    <h4>Leave A Comment</h4>
                    <form action="#" className="comment-form">
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="col-lg-12">
                                <textarea placeholder="Messages"></textarea>
                                <button type="submit" className="site-btn">Send message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
