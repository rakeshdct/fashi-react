import { useState, React } from 'react'
import { Link } from "react-router-dom";
import styles from './../../styles/faq.module.css'

const Faqsection = (props) => {
    const [isShowing, setIsShowing] = useState(false);
    const toggle = () => {
        setIsShowing(!isShowing);
    };
    return (
        <div className={styles.card}>
            <div className={styles.cardHeading}>
                <Link data-toggle="collapse" onClick={toggle} data-target="#collapseOne" aria-expanded={isShowing}>
                    {props.question}
                </Link>
            </div>
            <div id="collapseOne" className={[styles.collapse, styles.show].join(" ")} data-parent="#accordionExample" style={{ display: isShowing ? "block" : "none" }}>
                <div className={styles.cardBody}>
                    <p dangerouslySetInnerHTML={{ __html: props.answer }} />
                </div>
            </div>
        </div>
    )
}

export default Faqsection