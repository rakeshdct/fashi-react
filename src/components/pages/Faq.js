import { useState, React } from 'react'
import styles from './../../styles/faq.module.css'
import { Link } from "react-router-dom";

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
                  <FaqQuestionAnswer question="Is There Anything I Should Bring?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat."/>
                  <FaqQuestionAnswer question="Where Can I Find Market Research Reports?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat."/>
                  <FaqQuestionAnswer question="Where Can I Find The Wall Street Journal?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat."/>
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

export function FaqQuestionAnswer(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardHeading}>
          <Link data-toggle="collapse" onClick={toggle} data-target="#collapseOne" aria-expanded={isShowing}>
            {props.question}
          </Link>
        </div>
        <div id="collapseOne" className={[styles.collapse, styles.show].join(" ")} data-parent="#accordionExample" style={{ display: isShowing ? "block" : "none" }}>
          <div className={styles.cardBody}>
            <p>{props.answer}</p>
          </div>
        </div>
      </div>
    </>
  )
}