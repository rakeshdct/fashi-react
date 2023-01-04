import { React, useEffect } from 'react'
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

    const singleBanners = [
        {
            "category": "men",
            "imgsrc": "img/banner-1.jpg"
        },
        {
            "category": "Women’s",
            "imgsrc": "img/banner-2.jpg"
        },
        {
            "category": "Kid’s",
            "imgsrc": "img/banner-3.jpg"
        }
    ]
    const instaPhotos = [
        {
            "collection": "colorlib_Collection",
            "imgbg": "img/insta-1.jpg"
        },
        {
            "collection": "colorlib_Collection",
            "imgbg": "img/insta-2.jpg"
        },
        {
            "collection": "colorlib_Collection",
            "imgbg": "img/insta-3.jpg"
        },
        {
            "collection": "colorlib_Collection",
            "imgbg": "img/insta-4.jpg"
        },
        {
            "collection": "colorlib_Collection",
            "imgbg": "img/insta-5.jpg"
        },
        {
            "collection": "colorlib_Collection",
            "imgbg": "img/insta-6.jpg"
        }

    ]
    const latestBlogs = [
        {
            "date": "May 4,2019",
            "commentscount": "1",
            "title": "The Best Street Style From London Fashion Week",
            "text": "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
            "imgsrc": "img/latest-1.jpg"
        },
        {
            "date": "June 5,2020",
            "commentscount": "2",
            "title": "Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes",
            "text": "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
            "imgsrc": "img/latest-2.jpg"
        },
        {
            "date": "July 6,2021",
            "commentscount": "3",
            "title": "How To Brighten Your Wardrobe",
            "text": "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
            "imgsrc": "img/latest-3.jpg"
        }
    ]
    const benefitItems = [
        {
            "title": "FREE SHIPPING",
            "text": "For all order over 99$",
            "imgsrc": "img/icon-1.png"
        },
        {
            "title": "DELIVERY ON TIME",
            "text": "If good have prolems",
            "imgsrc": "img/icon-2.png"
        },
        {
            "title": "SECURE PAYMENT",
            "text": "100% secure payment",
            "imgsrc": "img/icon-3.png"
        }
    ]
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