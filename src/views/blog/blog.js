import React from 'react'
import { Link } from "react-router-dom";
import './../../styles/blog.css';

const Blog = () => {
  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <Link to="../"><i className="fa fa-home"></i> Home</Link>
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="blog-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1">
              <div className="blog-sidebar">
                <div className="search-form">
                  <h4>Search</h4>
                  <form action="#">
                    <input type="text" placeholder="Search . . .  "/>
                      <button type="submit"><i className="fa fa-search"></i></button>
                  </form>
                </div>
                <div className="blog-catagory">
                  <h4>Categories</h4>
                  <ul>
                    <li><Link to="#">Fashion</Link></li>
                    <li><Link to="#">Travel</Link></li>
                    <li><Link to="#">Picnic</Link></li>
                    <li><Link to="#">Model</Link></li>
                  </ul>
                </div>
                <div className="recent-post">
                  <h4>Recent Post</h4>
                  <div className="recent-blog">
                    <Link to="./blog-details" className="rb-item">
                      <div className="rb-pic">
                        <img src="img/blog/recent-1.jpg" alt=""/>
                      </div>
                      <div className="rb-text">
                        <h6>The Personality Trait That Makes...</h6>
                        <p>Fashion <span>- May 19, 2019</span></p>
                      </div>
                    </Link>
                    <Link to="./blog-details" className="rb-item">
                      <div className="rb-pic">
                        <img src="img/blog/recent-2.jpg" alt=""/>
                      </div>
                      <div className="rb-text">
                        <h6>The Personality Trait That Makes...</h6>
                        <p>Fashion <span>- May 19, 2019</span></p>
                      </div>
                    </Link>
                    <Link to="./blog-details" className="rb-item">
                      <div className="rb-pic">
                        <img src="img/blog/recent-3.jpg" alt=""/>
                      </div>
                      <div className="rb-text">
                        <h6>The Personality Trait That Makes...</h6>
                        <p>Fashion <span>- May 19, 2019</span></p>
                      </div>
                    </Link>
                    <Link to="./blog-details" className="rb-item">
                      <div className="rb-pic">
                        <img src="img/blog/recent-4.jpg" alt=""/>
                      </div>
                      <div className="rb-text">
                        <h6>The Personality Trait That Makes...</h6>
                        <p>Fashion <span>- May 19, 2019</span></p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="blog-tags">
                  <h4>Product Tags</h4>
                  <div className="tag-item">
                    <Link to="#">Towel</Link>
                    <Link to="#">Shoes</Link>
                    <Link to="#">Coat</Link>
                    <Link to="#">Dresses</Link>
                    <Link to="#">Trousers</Link>
                    <Link to="#">Men's hats</Link>
                    <Link to="#">Backpack</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="blog-item">
                    <div className="bi-pic">
                      <img src="img/blog/blog-1.jpg" alt=""/>
                    </div>
                    <div className="bi-text">
                      <Link to="./blog-details">
                        <h4>The Personality Trait That Makes People Happier</h4>
                      </Link>
                      <p>travel <span>- May 19, 2019</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="blog-item">
                    <div className="bi-pic">
                      <img src="img/blog/blog-2.jpg" alt=""/>
                    </div>
                    <div className="bi-text">
                      <Link to="./blog-details">
                        <h4>This was one of our first days in Hawaii last week.</h4>
                      </Link>
                      <p>Fashion <span>- May 19, 2019</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="blog-item">
                    <div className="bi-pic">
                      <img src="img/blog/blog-3.jpg" alt=""/>
                    </div>
                    <div className="bi-text">
                      <Link to="./blog-details">
                        <h4>Last week I had my first work trip of the year to Sonoma Valley</h4>
                      </Link>
                      <p>travel <span>- May 19, 2019</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="blog-item">
                    <div className="bi-pic">
                      <img src="img/blog/blog-4.jpg" alt=""/>
                    </div>
                    <div className="bi-text">
                      <Link to="./blog-details">
                        <h4>Happppppy New Year! I know I am a little late on this post</h4>
                      </Link>
                      <p>Fashion <span>- May 19, 2019</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="blog-item">
                    <div className="bi-pic">
                      <img src="img/blog/blog-5.jpg" alt=""/>
                    </div>
                    <div className="bi-text">
                      <Link to="./blog-details">
                        <h4>Absolue collection. The Lancome team has been one…</h4>
                      </Link>
                      <p>Model <span>- May 19, 2019</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="blog-item">
                    <div className="bi-pic">
                      <img src="img/blog/blog-6.jpg" alt=""/>
                    </div>
                    <div className="bi-text">
                      <Link to="./blog-details">
                        <h4>Writing has always been kind of therapeutic for me</h4>
                      </Link>
                      <p>Fashion <span>- May 19, 2019</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="loading-more">
                    <i className="icon_loading"></i>
                    <Link to="#">
                      Loading More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog