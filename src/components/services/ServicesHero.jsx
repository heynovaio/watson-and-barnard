import ExportedImage from "next-image-export-optimizer"
import picture from "@/public/images/icon-group@3x.png"
import styles from "./ServicesHero.module.css"

export default function ServicesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.greenBox} />
      <div className={styles.center}>
        <div className={styles.content}>
          <h1>Areas of Expertise</h1>
          <p>
            Our team of skilled survey experts, engineers and development consultants are
            by your side, from field to finish, and, at the helm of the industry’s latest
            technology, will provide you with the most precise and comprehensive
            geomatics.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <ExportedImage src={picture} alt="" sizes="524px" />
        </div>
      </div>
    </section>
  )
}
