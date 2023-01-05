import React from 'react'
import { instaPhotos } from './data'

const Instaphoto = () => {
    return (
        <div className="instagram-photo">
            {instaPhotos.map((instaPhoto, i) => (
                <div className="insta-item set-bg" key={i} data-setbg={instaPhoto.imgbg}>
                    <div className="inside-text">
                        <i className="ti-instagram"></i>
                        <h5><a href="./">{instaPhoto.collection}</a></h5>
                    </div>
                </div>
            )
            )}
        </div>

    )
}

export default Instaphoto