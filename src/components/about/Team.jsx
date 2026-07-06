import ExportedImage from "next-image-export-optimizer"
import hand from "@/public/images/hand.jpg"
import styles from "./Team.module.css"

export default function Team() {
  return (
    <section className={styles.team}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <ExportedImage src={hand} alt="" sizes="476px" />
          <div className={styles.box}>
            <p>
              Our team of skilled survey experts, engineers and development
              consultants are by your side, from field to finish, and at the helm of
              the industry’s latest technology, will provide you with the most precise
              and comprehensive geomatics.
              <br />
              <br />
              We are committed to providing surveying services to all related
              professionals with integrity, excellence and accuracy, and can be reached
              anytime over the phone, behind a screen or in person for guidance and
              project support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
