import React from 'react'
import { singleBanners } from './data'

const Singlebanner = () => {
    return (
        <div className="banner-section spad">
            <div className="container-fluid">
                <div className="row">
                    {singleBanners.map((singleBanner, i) =>
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