import React from 'react'
import { benefitItems } from './data'

const BenifitItems = () => {
    return (
        <div className="benefit-items">
            <div className="row">
                {benefitItems.map((benefitItem, i) =>
                (
                    <div className="col-lg-4" key={i}>
                        <div className="single-benefit">
                            <div className="sb-icon">
                                <img src={benefitItem.imgsrc} alt="" />
                            </div>
                            <div className="sb-text">
                                <h6>{benefitItem.title}</h6>
                                <p>{benefitItem.text}</p>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>

    )
}

export default BenifitItems