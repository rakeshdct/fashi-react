import { React, useEffect } from 'react'
import { singleBanners, instaPhotos, latestBlogs, benefitItems } from './data'
import Singlebanner from './singleBanner'
import DealoftheWeek from './dealoftheWeek'
import Instaphoto from './instaPhoto'
import Latestblog from './latestBlog'
import BenifitItems from './benifitItems'
import './../../styles/home.css';

const Home = () => {
    useEffect(() => {
        document.querySelectorAll('.set-bg').forEach(function (currdiv, i) {
            var bg = currdiv.getAttribute('data-setbg');
            currdiv.style.backgroundImage = 'url(' + bg + ')';
        });
    })
    return (
        <>
            <div className="banner-section spad">
                <div className="container-fluid">
                    <div className="row">
                        {singleBanners.map((singleBanner, i) =>
                            <Singlebanner key={i} category={singleBanner.category} imgsrc={singleBanner.imgsrc} />
                        )}
                    </div>
                </div>
            </div>
            <DealoftheWeek />
            <div className="instagram-photo">
                {instaPhotos.map((instaPhoto, i) =>
                    <Instaphoto key={i} collection={instaPhoto.collection} imgbg={instaPhoto.imgbg} />
                )}
            </div>
            <section className="latest-blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>From The Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {latestBlogs.map((latestBlog, i) =>
                            <Latestblog key={i} imgsrc={latestBlog.imgsrc} date={latestBlog.date} commentscount={latestBlog.commentscount} title={latestBlog.title} text={latestBlog.text} />
                        )}
                    </div>
                    <div className="benefit-items">
                        <div className="row">
                            {benefitItems.map((benefitItem, i) =>
                                <BenifitItems key={i} imgsrc={benefitItem.imgsrc} title={benefitItem.title} text={benefitItem.text} />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home