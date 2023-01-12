import { React } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Partnerlogo = (props) => {
    return (
        <OwlCarousel className='logo-carousel owl-carousel' {...props.partnerLogosOwlConfig}>
            {props.partnerLogos.map((partnerLogo, i) => (
                <div className="logo-item" key={i}>
                    <div className="tablecell-inner">
                        <img src={partnerLogo.imgsrc} alt="" />
                    </div>
                </div>
            )
            )}
        </OwlCarousel>
    )
}

export default Partnerlogo