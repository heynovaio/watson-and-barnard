import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import styles from "./Circles.module.css"

export default function Circles() {
  return (
    <div className={styles.circles}>
      <a href="tel:604-943-9433" aria-label="Call us">
        <FontAwesomeIcon className={styles.icon} icon={faPhoneAlt} />
      </a>
      <a href="mailto:contact@wbsurveys.ca" aria-label="Email us">
        <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
      </a>
    </div>
  )
}
