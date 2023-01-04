import React from 'react'
import { Link } from "react-router-dom";

const Latestblog = (props) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-latest-blog">
                <img src={props.imgsrc} alt="" />
                <div className="latest-text">
                    <div className="tag-list">
                        <div className="tag-item">
                            <i className="fa fa-calendar-o"></i>
                            {props.date}
                        </div>
                        <div className="tag-item">
                            <i className="fa fa-comment-o"></i>
                            {props.commentscount}
                        </div>
                    </div>
                    <Link to="./blog/blog-details">
                        <h4>{props.title}</h4>
                    </Link>
                    <p>{props.text} </p>
                </div>
            </div>
        </div>
    )
}

export default Latestblog