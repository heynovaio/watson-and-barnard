import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import touImg from "@/public/images/tout-img@3x.jpg"
import Circles from "../Circles"
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imgContainer}>
        <ExportedImage src={touImg} alt="" priority sizes="50vw" />
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.greenBox}>
          <div className={styles.align}>
            <h1>Land Surveying &amp; Engineering with Integrity</h1>
            <p>
              Providing quality service in Delta and the Lower Mainland for over 45
              years with a dynamic multidisciplinary team ready to take on any
              challenge.
            </p>
            <Link className={styles.button} href="/services/">
              Our Services
              <span className={styles.arrow}>
                <div />
                <div />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <Circles />
      </div>
    </section>
  )
}
