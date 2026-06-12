import { PhoneIcon, EnvelopeIcon } from "./icons"
import styles from "./Circles.module.css"

export default function Circles() {
  return (
    <div className={styles.circles}>
      <a href="tel:604-943-9433" aria-label="Call us">
        <PhoneIcon className={styles.icon} />
      </a>
      <a href="mailto:contact@wbsurveys.ca" aria-label="Email us">
        <EnvelopeIcon className={styles.icon} />
      </a>
    </div>
  )
}
