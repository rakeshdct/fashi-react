import {  React } from 'react'
import { faqs } from './data'
import { Link } from "react-router-dom";
import Faqsection from './faqSection'
import styles from './../../styles/faq.module.css'

const Faq = () => {
  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <Link to="../"><i className="fa fa-home"></i> Home</Link>
                <span>FAQs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.faqSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.faqAccordin}>
                <div className={styles.accordion} id="accordionExample">
                  {faqs.map((faq, i) =>
                  (
                    <Faqsection key={i} question={faq.question} answer={faq.answer}/>
                  )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq