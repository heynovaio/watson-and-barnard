import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import styles from "./ContactHero.module.css"

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.greenBox} />
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <p>
          Contact us to learn more about our services, get expert advice or to request a
          quote.
        </p>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.flexBox}>
          <div className={styles.item}>
            <a className={styles.circle} href="mailto:contact@wbsurveys.ca" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <div className={styles.title}>Email</div>
            <a className={styles.content} href="mailto:contact@wbsurveys.ca">
              contact@wbsurveys.ca
            </a>
          </div>
          <div className={styles.item}>
            <a className={styles.circle} href="tel:604.943.9433" aria-label="Phone">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </a>
            <div className={styles.title}>Phone</div>
            <a className={styles.content} href="tel:604.943.9433">
              604-943-9433
            </a>
          </div>
          <div className={styles.item}>
            <span className={styles.circle}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <div className={styles.title}>Address</div>
            <span className={styles.content}>1524 56 St, Delta, BC</span>
          </div>
        </div>
      </div>
    </section>
  )
}
