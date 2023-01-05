import { React } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { partnerLogosOwlConfig, partnerLogos } from './data'


const Partnerlogo = () => {
    return (
        <div className="partner-logo">
            <div className="container">
                <OwlCarousel className='logo-carousel owl-carousel' {...partnerLogosOwlConfig}>
                    {partnerLogos.map((partnerLogo, i) => (
                        <div className="logo-item" key={i}>
                            <div className="tablecell-inner">
                                <img src={partnerLogo.imgsrc} alt="" />
                            </div>
                        </div>
                    )
                    )}
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Partnerlogo