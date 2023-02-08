import React from 'react'
import { Link } from "react-router-dom";
import BenifitItems from './benifitItems'
import ErrorBoundry from "../../components/errorBoundry"

const Latestblog = (props) => {
    return (
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
                    {props.latestBlogs.map((latestBlog, i) =>
                        <div className="col-lg-4 col-md-6" key={i}>
                            <div className="single-latest-blog">
                                <img src={latestBlog.imgsrc} alt="" />
                                <div className="latest-text">
                                    <div className="tag-list">
                                        <div className="tag-item">
                                            <i className="fa fa-calendar-o"></i>
                                            {latestBlog.date}
                                        </div>
                                        <div className="tag-item">
                                            <i className="fa fa-comment-o"></i>
                                            {latestBlog.commentscount}
                                        </div>
                                    </div>
                                    <Link to="./blog/blog-details">
                                        <h4>{latestBlog.title}</h4>
                                    </Link>
                                    <p>{latestBlog.text} </p>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
                <ErrorBoundry>
                    <BenifitItems benefitItems={props.benefitItems} />
                </ErrorBoundry>
            </div>
        </section>

    )
}

export default Latestblog