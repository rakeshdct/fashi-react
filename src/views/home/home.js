import { React, useEffect } from 'react'
import Herosection from './heroSection'
import Singlebanner from './singleBanner'
import DealoftheWeek from './dealoftheWeek'
import Instaphoto from './instaPhoto'
import Latestblog from './latestBlog'
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
            <Herosection />
            <Singlebanner />
            <DealoftheWeek />
            <Instaphoto/>
            <Latestblog/>
        </>
    )
}

export default Home