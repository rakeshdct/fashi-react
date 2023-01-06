import React from 'react'

const Singlebanner = (props) => {
    return (
        <div className="banner-section spad">
            <div className="container-fluid">
                <div className="row">
                    {props.singleBanners.map((singleBanner, i) =>
                    (<div className="col-lg-4" key={i}>
                        <div className="single-banner">
                            <img src={singleBanner.imgsrc} alt="" />
                            <div className="inner-text">
                                <h4>{singleBanner.category}</h4>
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