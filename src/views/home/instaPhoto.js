import React from 'react'

const Instaphoto = (props) => {
    return (
        <div className="insta-item set-bg" data-setbg={props.imgbg}>
            <div className="inside-text">
                <i className="ti-instagram"></i>
                <h5><a href="./">{props.collection}</a></h5>
            </div>
        </div>
    )
}

export default Instaphoto