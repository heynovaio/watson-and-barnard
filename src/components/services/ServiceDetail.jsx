import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import detailImg from "@/public/images/topographic-survey.jpg"
import projectImg from "@/public/images/placeholder.png"
import styles from "./ServiceDetail.module.css"

const LOREM =
  "Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit"

// Shared layout for the individual service detail pages. The Gatsby source had
// 7 identical stub pages ("Topographic Survey" + lorem); this renders that
// content and accepts a title so each route can be customised later.
export default function ServiceDetail({ title = "Topographic Survey" }) {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.green} />
        <div className={styles.content}>
          <h4>
            <Link href="/services/">Services</Link> &gt; <span>{title}</span>
          </h4>
          <h1>{title}</h1>
          <p>{LOREM} ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor</p>
        </div>
      </section>

      <div className={styles.outerContainer}>
        <section className={styles.overview}>
          <div>
            <h2>Overview</h2>
            <p>
              {LOREM} ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/tripod.svg" alt="" />
        </section>
      </div>

      <section className={styles.details}>
        <div className={styles.blue} />
        <div className={styles.innerContainer}>
          <ul>
            {[1, 2, 3].map((n) => (
              <li key={n}>
                <h3>Detail {n}</h3>
                <p>{LOREM} ea</p>
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
            <p>{LOREM} ea incididunt</p>
            <button type="button" className={styles.cta}>
              See what you need
            </button>
          </div>
          <ul>
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <li key={n}>Example of use {n}</li>
            ))}
          </ul>
        </section>

        <section className={styles.projects}>
          <h2>Related Projects</h2>
          <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing</p>
          <div className={styles.cardRow}>
            {[1, 2, 3].map((n) => (
              <div key={n}>
                <ExportedImage src={projectImg} alt="" sizes="369px" />
                <h3>Project Name</h3>
                <p>Lorem quis sunt magna dolor consectetur aliqua officia</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
