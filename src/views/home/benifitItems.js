import React from 'react'

const BenifitItems = (props) => {
    return (
        <div className="col-lg-4">
            <div className="single-benefit">
                <div className="sb-icon">
                    <img src={props.imgsrc} alt="" />
                </div>
                <div className="sb-text">
                    <h6>{props.title}</h6>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default BenifitItems