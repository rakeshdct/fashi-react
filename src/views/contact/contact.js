import React from 'react'
import './../../styles/contact.css';

const Contact = () => {
  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <a href="./"><i className="fa fa-home"></i> Home</a>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="map spad">
        <div className="container">
          <div className="map-inner">
            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48158.305462977965!2d-74.13283844036356!3d41.02757295168286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e440473470d7%3A0xcaf503ca2ee57958!2sSaddle%20River%2C%20NJ%2007458%2C%20USA!5e0!3m2!1sen!2sbd!4v1575917275626!5m2!1sen!2sbd" height="610" style={{border:0}} allowFullScreen="">
            </iframe>
            <div className="icon">
              <i className="fa fa-map-marker"></i>
            </div>
          </div>
        </div>
      </div>


      <section className="contact-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-title">
                <h4>Contacts Us</h4>
                <p>Contrary to popular belief, Lorem Ipsum is simply random text. It has roots in a piece of
                  classNameical Latin literature from 45 BC, maki years old.</p>
              </div>
              <div className="contact-widget">
                <div className="cw-item">
                  <div className="ci-icon">
                    <i className="ti-location-pin"></i>
                  </div>
                  <div className="ci-text">
                    <span>Address:</span>
                    <p>60-49 Road 11378 New York</p>
                  </div>
                </div>
                <div className="cw-item">
                  <div className="ci-icon">
                    <i className="ti-mobile"></i>
                  </div>
                  <div className="ci-text">
                    <span>Phone:</span>
                    <p>+65 11.188.888</p>
                  </div>
                </div>
                <div className="cw-item">
                  <div className="ci-icon">
                    <i className="ti-email"></i>
                  </div>
                  <div className="ci-text">
                    <span>Email:</span>
                    <p><a href="mailto:reactjs.poc@mailinator.com">reactjs.poc@mailinator.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="contact-form">
                <div className="leave-comment">
                  <h4>Leave A Comment</h4>
                  <p>Our staff will call back later and answer your questions.</p>
                  <form action="#" className="comment-form">
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Your name"/>
                      </div>
                      <div className="col-lg-6">
                        <input type="text" placeholder="Your email"/>
                      </div>
                      <div className="col-lg-12">
                        <textarea placeholder="Your message"></textarea>
                        <button type="submit" className="site-btn">Send message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact