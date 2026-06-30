import ExportedImage from "next-image-export-optimizer"
import nation from "@/public/images/Nation@3x.jpg"
import spot from "@/public/images/912859458@3x.jpg"
import surrey from "@/public/images/space-air-img.jpg"
import mills from "@/public/images/Development@3x.jpg"
import spring from "@/public/images/Spring@3x.jpg"
import styles from "./Past.module.css"

const PROJECTS = [
  { img: nation, title: "Tsawwassen First Nation" },
  { img: spot, title: "The Spot Air Space Plan (12th and Cambie)" },
  { img: surrey, title: "Surrey 3CP Air Space Plan" },
  { img: mills, title: "Tsawwassen Mills" },
  { img: spring, title: "Tsawwassen Springs Development" },
]

export default function Past() {
  return (
    <section className={styles.friends}>
      <h2>Past Projects</h2>
      <p>
        We’re proud to play a small part in the livelihood of our community. Each
        project is a testament to our genuine client-focused approach and commitment
        to excellence.
      </p>
      <div className={styles.gallery}>
        {PROJECTS.map((p) => (
          <div className={styles.itemContainer} key={p.title}>
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <ExportedImage src={p.img} alt={p.title} sizes="(max-width: 850px) 100vw, 590px" />
              </div>
              <div className={styles.titleContainer}>
                <h3 className={styles.title}>{p.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
