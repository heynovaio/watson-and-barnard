import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import defaultDetailImg from "@/public/images/topographic-survey.jpg"
import defaultProjectImg from "@/public/images/placeholder.png"
import styles from "./ServiceDetail.module.css"

export default function ServiceDetail({
  title = "Topographic Survey",
  intro = "",
  overview = "",
  overviewIcon = "/images/tripod.svg",
  details = [],
  detailImg = defaultDetailImg,
  applications = { intro: "", items: [] },
  projects = { intro: "", items: [] },
}) {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.green} />
        <div className={styles.content}>
          <h4>
            <Link href="/services/">Services</Link> &gt; <span>{title}</span>
          </h4>
          <h1>{title}</h1>
          {intro && <p>{intro}</p>}
        </div>
      </section>

      <div className={styles.outerContainer}>
        <section className={styles.overview}>
          <div>
            <h2>Overview</h2>
            {overview && <p>{overview}</p>}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={overviewIcon} alt="" />
        </section>
      </div>

      <section className={styles.details}>
        <div className={styles.blue} />
        <div className={styles.innerContainer}>
          <ul>
            {details.map((d, i) => (
              <li key={d.title ?? i}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </li>
            ))}
          </ul>
          <div>
            <ExportedImage src={detailImg} alt="" sizes="(max-width: 768px) 100vw, 617px" />
          </div>
        </div>
      </section>

      <div className={styles.outerContainer}>
        <section className={styles.applications}>
          <div className={styles.copy}>
            <h2>Applications</h2>
            {applications.intro && <p>{applications.intro}</p>}
            <button type="button" className={styles.cta}>
              See what you need
            </button>
          </div>
          <ul>
            {applications.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.projects}>
          <h2>Related Projects</h2>
          {projects.intro && <p>{projects.intro}</p>}
          <div className={styles.cardRow}>
            {projects.items.map((p, i) => (
              <div key={p.name ?? i}>
                <ExportedImage src={p.image ?? defaultProjectImg} alt="" sizes="369px" />
                <h3>{p.name}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}