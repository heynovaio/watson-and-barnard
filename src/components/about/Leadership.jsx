import ExportedImage from "next-image-export-optimizer"
import placeholder from "@/public/images/services_3@3x.jpg"
import styles from "./Leadership.module.css"

function PersonCard({ cardClass, linkClass }) {
  return (
    <div className={`${styles.card} ${cardClass}`}>
      <ExportedImage src={placeholder} alt="Team member" sizes="(max-width: 590px) 100vw, 450px" />
      <div className={styles.content}>
        <h4>Position</h4>
        <h4>John Doe</h4>
        <p>Credentials | University Degree</p>
        <a href="#">
          <span className={`${styles.readLink} ${linkClass}`}>Read more</span>
        </a>
      </div>
    </div>
  )
}

export default function Leadership() {
  return (
    <section className={styles.leadership}>
      <div className={styles.outer}>
        <h2>Our Leadership Team</h2>
        <p className={styles.sub}>
          Reprehenderit esse labore id veniam ut veniam non ex adipisicing
        </p>
        <div className={`${styles.grid} ${styles.leaderGrid}`}>
          {Array.from({ length: 4 }).map((_, i) => (
            <PersonCard key={i} cardClass={styles.leaderCard} linkClass={styles.linkA} />
          ))}
        </div>

        <h2>Our Technical Team</h2>
        <p className={styles.sub}>
          Reprehenderit esse labore id veniam ut veniam non ex adipisicing
        </p>
        <div className={`${styles.grid} ${styles.teamGrid}`}>
          {Array.from({ length: 6 }).map((_, i) => (
            <PersonCard key={i} cardClass={styles.teamCard} linkClass={styles.linkB} />
          ))}
        </div>

        <h2>Our Field Team</h2>
        <p className={styles.sub}>
          Reprehenderit esse labore id veniam ut veniam non ex adipisicing
        </p>
        <div className={`${styles.grid} ${styles.teamGrid}`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <PersonCard key={i} cardClass={styles.teamCard} linkClass={styles.linkB} />
          ))}
        </div>
      </div>
    </section>
  )
}
