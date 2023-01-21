import { React, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchfaqData, faqSelector } from "./faq-dux";
import Faqsection from './faqSection'
import ComponentPreLoader from './../../components/componentPreLoader';
import styles from './../../styles/faq.module.css'

const Faq = () => {
  const dispatch = useDispatch();
  const { faqData, loading } = useSelector(faqSelector);

  useEffect(() => {
    dispatch(fetchfaqData());
  }, [dispatch]);
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
                  {
                    loading ? <ComponentPreLoader /> : <>{faqData.map((faq, i) =>
                    (
                      <Faqsection key={i} question={faq.question} answer={faq.answer} />
                    )
                    )
                    }
                    </>
                  }
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