import { React, useEffect } from 'react'
import Herosection from './heroSection'
import Singlebanner from './singleBanner'
import DealoftheWeek from './dealoftheWeek'
import Instaphoto from './instaPhoto'
import Latestblog from './latestBlog'
import { homeData } from './data'
import './../../styles/home.css';

const Home = () => {
    useEffect(() => {
        document.querySelectorAll('.set-bg').forEach(function (currdiv, i) {
            var bg = currdiv.getAttribute('data-setbg');
            currdiv.style.backgroundImage = 'url(' + bg + ')';
        },[]);
    })
    return (
        <>
            <Herosection heroSectionOwlConfig={homeData.heroSectionOwlConfig} heroSections={homeData.heroSections}/>
            <Singlebanner singleBanners={homeData.singleBanners} />
            <DealoftheWeek />
            <Instaphoto instaPhotos={homeData.instaPhotos}/>
            <Latestblog latestBlogs={homeData.latestBlogs} benefitItems={homeData.benefitItems}/>
        </>
    )
}

export default Home