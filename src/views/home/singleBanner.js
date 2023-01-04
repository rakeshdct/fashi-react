import React from 'react'

const Singlebanner = (props) => {
    return (
        <div className="col-lg-4">
            <div className="single-banner">
                <img src={props.imgsrc} alt="" />
                <div className="inner-text">
                    <h4>{props.category}</h4>
                </div>
            </div>
        </div>
    )
}

export default Singlebanner